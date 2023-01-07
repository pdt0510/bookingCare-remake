import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as combinedActions from '../../store/actions';
import './UserManager.scss';

class UserManager extends Component {
 componentDidMount = async () => {
  const { GetAllUsersFn, allUsers } = this.props;
  if (allUsers) {
   // console.log('existing users ---', allUsers); //existing users
  } else {
   await GetAllUsersFn(); // v47xx3
  }
 };

 renderAllUsers = (list) => {
  const templist = list.map((item, idx) => {
   return (
    <tr
     key={idx}
     className='tbody-tr'
    >
     <td>{idx + 1}</td>
     <td>{item.firstname}</td>
     <td>{item.lastname}</td>
     <td>{item.email}</td>
     <td>{item.address}</td>
     <td>
      <div
       className='BTN BTN-default btn-login btn-edit'
       onClick={this.handleLogged}
      >
       Edit
      </div>
      <div
       className='BTN BTN-danger btn-login'
       onClick={this.handleLogged}
      >
       Delete
      </div>
     </td>
    </tr>
   );
  });
  return templist;
 };

 render() {
  const { allUsers } = this.props;

  return (
   <div className='userManager-content'>
    <span className='userManager-header'>User manager</span>
    <table className='table table-sm table-hover table-bordered userManager-table'>
     <thead className='table-success'>
      <tr>
       <th scope='col'>No.</th>
       <th scope='col'>Firstname</th>
       <th scope='col'>Lastname</th>
       <th scope='col'>Email</th>
       <th scope='col'>Address</th>
       <th scope='col'>Actions</th>
      </tr>
     </thead>
     {/* v47xx3 */}
     <tbody>{allUsers && this.renderAllUsers(allUsers)}</tbody>
    </table>
   </div>
  );
 }
}

const mapStateToProps = ({ userReducer }) => ({
 allUsers: userReducer.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
 GetAllUsersFn: () => dispatch(combinedActions.GetAllUsersFn()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
