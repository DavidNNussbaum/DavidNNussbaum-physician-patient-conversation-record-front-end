const fetchMeds = () => {
  return (dispatch) => {
    dispatch({ type: 'LOADING_MEDICATIONS'})
    fetch('http://localhost:3000/medications').then(response => {
      return response.json()
    }).then(responseJSON => {
      dispatch({ type: 'ADD_MEDS', medications: responseJSON.data })
    })
  }
}

export const editComplication = (complicationData, complicationId, token) => {
  return dispatch => {
    return fetch(`http://localhost:3000/complications/${complicationId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      },
      body: JSON.stringify(complicationData)
    })
    .then(resp => {
      if (resp.ok) {
        resp.json()
        .then(complication => {
          dispatch({type: 'UPDATE_COMPLICATION', complication: complication.data.attributes})
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

export const createAComplication = (complicationData, token) => {
  return dispatch => {
    return fetch('http://localhost:3000/complications', {
          method: "POST",
          headers: {
            "Content-Type": "application/json", 
            "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify(complicationData)
        })
        .then(resp => {
          if (resp.ok) {
            resp.json()
            .then(complication => {
                dispatch({type: 'CREATE_COMPLICATION', complication: complication.data.attributes})
            })
          } else {
             return resp.json()
             .then(json => {
               return Promise.reject(json.error)
             })
          }
        })
      }}
         
export const deleteAComplication = (complicationId, token) => {
  return dispatch => {
    fetch(`http://localhost:3000/complications/${complicationId}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Bearer ${token}`
      }, 
    })
    .then(complication => {
      dispatch({type: 'DELETE_COMPLICATION', complicationId: complicationId})
    })
  }
}

export const createAMedication = (medicationData) => {
  return dispatch => {
  return fetch('http://localhost:3000/medications', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(medicationData)
          })
        .then(resp => {
          if (resp.ok) {
            resp.json()
            .then(medication => {
              dispatch({type: 'CREATE_MEDICATION', medication: medication.data})
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

export default fetchMeds;
