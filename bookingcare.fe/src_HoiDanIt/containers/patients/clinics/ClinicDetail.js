import { Component } from 'react';
import { connect } from 'react-redux';
import 'react-markdown-editor-lite/lib/index.css';
import './ClinicDetail.scss';
import { getClinicByIdServ } from '../../../services/userService';
import * as actions from '../../../store/actions';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import CommonUtils from '../../../utils/CommonUtils';

class ClinicDetail extends Component {
  state = {
    img: null,
    name: null,
    descText: null,
    doctorOpt: [],
  };

  componentDidMount = async () => {
    const clinicId = +this.props.match.params.id;
    if (clinicId && typeof clinicId === 'number') {
      const data = await getClinicByIdServ(clinicId);

      if (data.errCode === 0) {
        const { htmlDesc, address, name } = data.records;
        const textContent = CommonUtils.convertHtmlStrToText(htmlDesc);

        this.setState({
          name,
          descText: textContent,
          address,
        });
      }
    }
  };

  render() {
    const { name, descText, address } = this.state;

    return (
      <div className='clinicDetail-content'>
        <h3>{name}</h3>
        {address}
        {descText}
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  language: state.app.language,
});

const mapDispatchToProps = (dispatch) => ({
  fetchDoctorInfoAllcodeFn: () => dispatch(actions.fetchDoctorInfoAllcodeFn()),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps),
)(ClinicDetail);
