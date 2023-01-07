import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as combinedActions from '../../store/actions';
import './UserManager.scss';
import UserManagerModal from '../modal/UserManagerModal';
import * as constVals from '../../utilities';

class UserManager extends Component {
 state = {
  openModal: false,
  isUpdate: false,
  userSelected: false,
 };

 componentDidMount = async () => {
  const { GetAllUsersFn, allUsers } = this.props;
  if (allUsers) {
  } else {
   await GetAllUsersFn();
  }
 };

 handleEdit = async (id) => {
  if (id) {
   const { noErrors } = constVals.ObjectKeysValues;
   const { getAnUserByIdFn } = this.props;

   const data = await getAnUserByIdFn(id); //v52xx2
   if (data.errCode === noErrors) {
    const isUpdate = true;
    const dataForUpdate = {
     id,
     ...data.user,
    };
    this.triggerModalFn(isUpdate, dataForUpdate);
   }
  }
 };

 handleDelete = (id, email) => {
  if (window.confirm(`Do you really want to delete: ${email} ?`)) {
   this.props.toggleLoadingGif();
   const { delayTime } = constVals.ObjectKeysValues;

   setTimeout(async () => {
    this.props.toggleLoadingGif();
    await this.props.deleteUserByIdFn(id);
    await this.props.GetAllUsersFn();
   }, delayTime);
  }
 };

 handleAddnew = () => {
  this.triggerModalFn();
 };

 triggerModalFn = (isUpdate = false, user = null) => {
  this.setState({
   openModal: !this.state.openModal,
   isUpdate: isUpdate,
   userSelected: isUpdate && user ? user : null,
  });
 };

 renderAllUsers = (list) => {
  if (list && list.length > 0) {
   const templist = list.map((item, idx) => {
    return (
     <tr key={idx}>
      <td>{idx + 1}</td>
      <td>{item.firstname}</td>
      <td>{item.lastname}</td>
      <td>{item.email}</td>
      <td>{item.address}</td>
      <td>
       <div
        className='BTN BTN-default btn-edit'
        onClick={() => this.handleEdit(item.id)}
       >
        Edit
       </div>
       <div
        className='BTN BTN-danger'
        onClick={() => this.handleDelete(item.id, item.email)}
       >
        Delete
       </div>
      </td>
     </tr>
    );
   });
   return templist;
  } else {
   const numbersOfCols = 6;
   const noData = (
    <tr>
     <td
      colSpan={numbersOfCols}
      className='table-noData'
     >
      No Data
     </td>
    </tr>
   );

   return noData;
  }
 };

 renderModal = () => {
  const { openModal, userSelected, isUpdate } = this.state;

  return (
   <UserManagerModal
    openModal={openModal} //v49xx1
    isUpdate={isUpdate}
    userSelected={isUpdate ? userSelected : null}
   />
  );
 };

 render() {
  const { allUsers } = this.props;

  const allUsers2 = [
   {
    email: 'phanductai920510@gmail.com',
    firstname: 'Tài',
    lastname: 'Phan Đức',
    address: 'dia chi q12',
   },
   {
    email: 'pntran@angiang.com',
    firstname: 'Trân',
    lastname: 'Phạm Ngọc',
    address: 'An Giang province',
   },
   { email: 'tintuc271@gmail.com', firstname: 'Admin', lastname: 'Phan Đức', address: 'Tphcm' },
   {
    email: 'lephuonganh@gmail.com',
    firstname: 'Anh',
    lastname: 'Lê Phương',
    address: 'Bình Thuận',
   },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
   { email: 'hoa@gmail.com', firstname: 'Hoa', lastname: 'Nguyễn Thị', address: 'Đắc Lắc' },
  ];
  return (
   <div className='userManager-content'>
    <span className='userManager-header'>User manager</span>
    {this.renderModal()}
    <div
     className='BTN BTN-primary btn-add'
     onClick={this.handleAddnew}
    >
     + Add new
    </div>
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
     <tbody className='table-tbody'>{this.renderAllUsers(allUsers)}</tbody>
    </table>
   </div>
  );
 }
}

const mapStateToProps = ({ adminReducer }) => ({
 allUsers: adminReducer.allUsers,
});

const mapDispatchToProps = (dispatch) => ({
 getAnUserByIdFn: (id) => dispatch(combinedActions.getAnUserByIdFn(id)), //v52xx2
 deleteUserByIdFn: (id) => dispatch(combinedActions.deleteUserByIdFn(id)), //v51xx1
 GetAllUsersFn: () => dispatch(combinedActions.GetAllUsersFn()),
 toggleLoadingGif: () => dispatch(combinedActions.toggleLoadingGif()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserManager);
