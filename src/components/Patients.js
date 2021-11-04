import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import fetchPatients from '../actions/patientActions';
import PatientList from '../lists/PatientList';
import LoadingIndicator from './LoadingIndicator';
import ErrorPage from './ErrorPage';
import CreatePatient from './CreatePatient'
 
class Patients extends PureComponent {
    componentDidMount() {
        this.props.fetchMeds()
      }
      
      handleLoading = () => {
        if(this.props.loading) {
          return < LoadingIndicator />
        } else {
          return (
            <PatientList patients={this.props.patients.patients}   conversations={this.props.conversations.conversations} currentUser={this.props.currentUser}/>
          )
        }}
    render() {
      if (!!this.props.loading) {
        return <LoadingIndicator/>
      }
      if (!!this.props.error) {
        return <ErrorPage error={this.props.error} />
      }
        return (
            <>
            <h1>Patients</h1>
            <div>
            { this.props.currentUser.user && (
          <CreatePatient />
            )}
                {this.handleLoading()}
            </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      patients: state.patients,
      conversations: state.conversations,
      loading: state.patients.loading
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
        fetchPatients: () => dispatch(fetchPatients()),
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Patients)