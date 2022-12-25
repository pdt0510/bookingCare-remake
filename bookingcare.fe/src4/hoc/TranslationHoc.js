import React, { Component } from 'react';
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-pluralrules/polyfill';
import '@formatjs/intl-pluralrules/locale-data/vi';
import '@formatjs/intl-pluralrules/locale-data/en';
import '@formatjs/intl-relativetimeformat/polyfill';
import '@formatjs/intl-relativetimeformat/locale-data/vi';
import '@formatjs/intl-relativetimeformat/locale-data/en';
import CommonUtils from '../utilities/commonUtils';

class TranslationHoc extends Component {
 render() {
  const { children, language } = this.props;
  const messages = CommonUtils.getLangFiles(); //v54xx3

  return (
   <IntlProvider
    locale={language}
    defaultLocale={language}
    messages={messages[language]} //v54xx3
   >
    {children}
   </IntlProvider>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

export default connect(mapStateToProps, null)(TranslationHoc);
