import React, { Component } from 'react';
import { connect } from 'react-redux';
import './HeaderContainer.scss';
import MenuGroup from '../../components/menuGroup/MenuGroup';
import { adminMenu } from '../../supplies/menuApp';
import * as combinedActs from '../../store/actions';
import { LANGUAGES } from '../../utilities/constant';

class HeaderContainer extends Component {
 switchLang = () => {
  this.props.switchLanguage();
 };

 render() {
  const { language } = this.props;
  const { EN, VI } = LANGUAGES;

  return (
   <div className='headerContainer-content'>
    <MenuGroup menu={adminMenu} />
    <div
     className='headerContainer-lang'
     onClick={this.switchLang}
    >
     {language === LANGUAGES.EN ? EN.toUpperCase() : VI.toUpperCase()}
    </div>
   </div>
  );
 }
}

const mapStateToProps = ({ appReducer }) => ({
 language: appReducer.language,
});

const mapDispatchToProps = (dispatch) => ({
 switchLanguage: () => dispatch(combinedActs.switchLanguage()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
