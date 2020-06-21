// @flow
import log from 'loglevel';
import { init as initAsync, config, getUserSettings as getUserSettingsAsync } from 'd2/lib/d2';
import moment from 'moment';
import i18n from '@dhis2/d2-i18n';
import environments from 'capture-core/constants/environments';
import CurrentLocaleData from 'capture-core/utils/localeData/CurrentLocaleData';
import { setD2 } from 'capture-core/d2/d2Instance';
import type { LocaleDataType } from 'capture-core/utils/localeData/CurrentLocaleData';
import { loadMetaDataAsync, loadSystemSettingsAsync } from 'capture-core/metaDataStoreLoaders';
import { buildMetaDataAsync, buildSystemSettingsAsync } from 'capture-core/metaDataMemoryStoreBuilders';
import { initControllersAsync } from 'capture-core/storageControllers';
import { DisplayException } from 'capture-core/utils/exceptions/DisplayException';

function setLogLevel() {
    const levels = {
        [environments.dev]: log.levels.DEBUG,
        [environments.devDebug]: log.levels.TRACE,
        [environments.test]: log.levels.INFO,
        [environments.prod]: log.levels.ERROR,
    };
    // $FlowSuppress
    // $FlowFixMe[invalid-computed-prop] automated comment
    let level = levels[process.env.NODE_ENV];
    if (!level && level !== 0) {
        level = log.levels.ERROR;
    }

    log.setLevel(level);
}

function setConfig() {
    const { REACT_APP_DHIS2_BASE_URL, REACT_APP_DHIS2_AUTHORIZATION, NODE_ENV } = process.env;
    const baseUrl = REACT_APP_DHIS2_BASE_URL || '';
    config.baseUrl = `${baseUrl}/api`;

    if (NODE_ENV !== environments.prod) {
        config.headers = {
            'X-Requested-With': 'XMLHttpRequest',
            Authorization: REACT_APP_DHIS2_AUTHORIZATION,
        };
    }

    // Temporary setting some old d2 translations for the d2 ui sharing dialog
    config.i18n.sources.add('i18n/i18n_module_en.properties');
}

function isLangRTL(code) {
    const langs = ['ar', 'fa', 'ur'];
    const prefixed = langs.map((c) => `${c}-`);
    return langs.includes(code) || prefixed.filter((c) => code.startsWith(c)).length > 0;
}

function setMomentLocaleAsync(locale: string) {
    if (locale === 'en') {
        moment.locale(locale);
        return Promise.resolve();
    }

    return new Promise((resolve) => {
        // $FlowSuppress
        // $FlowFixMe[unsupported-syntax] automated comment
        import(`moment/locale/${locale}`)
            .then(() => {
                moment.locale(locale);
                log.info(`got moment locale config for ${locale}`);
                resolve();
            })
            .catch(() => {
                // fallback to english
                moment.locale('en');
                log.error(`could not get moment locale config for ${locale}`);
                resolve();
            });
    });
}

function setDateFnLocaleAsync(locale: string, weekdays: any, weekdaysShort: any, firstDayOfWeek: number) {
    return new Promise((resolve, reject) => {
        // $FlowSuppress
        // $FlowFixMe[unsupported-syntax] automated comment
        import(`date-fns/locale/${locale}`)
            .then((dateFnLocale) => {
                const localeData: LocaleDataType = {
                    dateFnsLocale: dateFnLocale,
                    weekDays: weekdays,
                    weekDaysShort: weekdaysShort,
                    calendarFormatHeaderLong: 'dddd D MMM',
                    calendarFormatHeaderShort: 'D MMM',
                    selectDatesText: i18n.t('Choose one or more dates...'),
                    selectDateText: i18n.t('Choose a date...'),
                    todayLabelShort: i18n.t('Today'),
                    todayLabelLong: i18n.t('Today'),
                    weekStartsOn: firstDayOfWeek,
                };

                log.info(`got date-fns locale for ${locale}`);
                CurrentLocaleData.set(localeData);
                resolve();
            }).catch(() => {
                log.error(`could not get date-fns locale config for ${locale}, fallback to en`);
                // $FlowSuppress
                import('date-fns/locale/en')
                    .then((dateFnLocale) => {
                        const localeData: LocaleDataType = {
                            dateFnsLocale: dateFnLocale,
                            weekDays: weekdays,
                            weekDaysShort: weekdaysShort,
                            calendarFormatHeaderLong: 'dddd D MMM',
                            calendarFormatHeaderShort: 'D MMM',
                            selectDatesText: i18n.t('Choose one or more dates...'),
                            selectDateText: i18n.t('Choose a date...'),
                            todayLabelShort: i18n.t('Today'),
                            todayLabelLong: i18n.t('Today'),
                            weekStartsOn: firstDayOfWeek,
                        };

                        CurrentLocaleData.set(localeData);
                        resolve();
                    })
                    .catch(() => {
                        log.error(`could not get the fallback date-fns locale for ${locale}`);
                        reject();
                    });
            });
    });
}

function changeI18nLocale(locale) {
    i18n.changeLanguage(locale);
    // $FlowSuppress
    // $FlowFixMe[incompatible-use] automated comment
    document.body.setAttribute('dir', isLangRTL(locale) ? 'rtl' : 'ltr');
}

function initI18n(locale) {
    changeI18nLocale(locale);
    i18n.setDefaultNamespace('default');
}

async function setLocaleDataAsync(uiLocale: string) { //eslint-disable-line
    const locale = uiLocale;
    await setMomentLocaleAsync(locale);
    const weekdays = moment.weekdays();
    const weekdaysShort = moment.weekdaysShort();
    // $FlowSuppress
    // $FlowFixMe[prop-missing] automated comment
    const firstDayOfWeek = moment.localeData()._week.dow; //eslint-disable-line

    await setDateFnLocaleAsync(locale, weekdays, weekdaysShort, firstDayOfWeek);
    initI18n(locale);
}

async function initializeMetaDataAsync(dbLocale: string) {
    await loadMetaDataAsync();
    await buildMetaDataAsync(dbLocale);
}

async function initializeSystemSettingsAsync() {
    const systemSettingsCacheData = await loadSystemSettingsAsync();
    await buildSystemSettingsAsync(systemSettingsCacheData);
}

function setHeaderBarStrings(d2) {
    d2.i18n.addStrings(['app_search_placeholder=search']);
}

export async function initializeAsync(onCacheExpired: Function) {
    setLogLevel();

    // initialize d2
    setConfig();
    const d2 = await initAsync();
    const userSettings = await getUserSettingsAsync();
    setD2(d2);
    setHeaderBarStrings(d2);
    // initialize storage controllers
    try {
        await initControllersAsync(onCacheExpired);
    } catch (error) {
        throw new DisplayException(i18n.t('A possible reason for this is that the browser or mode (e.g. privacy mode) is not supported. See log for details.'), error);
    }

    // set locale data
    const uiLocale = userSettings.keyUiLocale;
    const dbLocale = userSettings.keyDbLocale;
    await setLocaleDataAsync(uiLocale);

    // initialize system settings
    await initializeSystemSettingsAsync();

    // initialize metadata
    await initializeMetaDataAsync(dbLocale);
}
