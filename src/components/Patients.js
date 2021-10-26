import React, { PureComponent} from 'react';
import { connect } from 'react-redux';
import fetchMeds from '../actions/medActions';
import MedicationList from '../lists/MedicationList';
import LoadingIndicator from './LoadingIndicator';
import ErrorPage from './ErrorPage';
import CreateMedication from './CreateMedication'
 
class Medications extends PureComponent {
    componentDidMount() {
        this.props.fetchMeds()
      }
      
      handleLoading = () => {
        if(this.props.loading) {
          return < LoadingIndicator />
        } else {
          return (
            <MedicationList medications={this.props.medications.medications}   complications={this.props.complications.complications} currentUser={this.props.currentUser}/>
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
            <h1>Medications</h1>
            <div>
            { this.props.currentUser.user && (
          <CreateMedication />
            )}
                {this.handleLoading()}
            </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
      medications: state.medications,
      complications: state.complications,
      loading: state.medications.loading
    }
  }

  const mapDispatchToProps = dispatch => {
      return {
        fetchMeds: () => dispatch(fetchMeds()),
      }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(Medications)