const fetchPatients = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_PATIENTS'})
    fetch('http://localhost:3000/patients').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_PATIENTS', patients: responseJSON.data })
    })
  }
}

export const editConversation = (conversationData, conversationId, token) => {
  return dispatch => {
    return fetch(`http://localhost:3000/conversations/${conversationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(conversationData)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then(conversation => {
          dispatch({type: 'UPDATE_CONVERSATION', conversationn: conversation.data.attributes})
        })
      } else {
         return resp.json()
         .then(json => {
           return Promise.reject(json.error)
         })
      }
    })
  }
}

export const createAConversation = (conversationData, token) => {
  return dispatch => {
    return fetch('http://localhost:3000/conversations', {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(conversationData)
        })
        .then(resp => {
          if (resp.ok) {
            resp.json()
            .then(conversation => {
                dispatch({type: 'CREATE_CONVERSATION', conversation: conversation.data.attributes})
            })
          } else {
             return resp.json()
             .then(json => {
               return Promise.reject(json.error)
             })
          }
        })
      }}
         
export const deleteAConversation = (conversationId, token) => {
  return dispatch => {
    fetch(`http://localhost:3000/conversations/${conversationId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }, 
    })
    .then(conversation => {
      dispatch({type: 'DELETE_CONVERSATION', conversationnId: conversationId})
    })
  }
}

export const createAPatient = (patientData) => {
  return dispatch => {
  return fetch('http://localhost:3000/patients', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(patientData)
          })
        .then(resp => {
          if (resp.ok) {
            resp.json()
            .then(patient => {
              dispatch({type: 'CREATE_PATIENT', patient: patient.data})
            })
          }
           else {
             return resp.json()
             .then(json => {
              dispatch({type: 'ERROR', errorMessage: json.error })
              return Promise.reject(json.error)
             })
             
           }
        })
      }
    }

export default fetchPatients;
