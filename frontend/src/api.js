const API_URL = 'http://localhost:5003/api/equipment'

export const getEquipment = () =>
  fetch(API_URL).then(res => res.json())

export const addEquipment = data =>
  fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

export const updateEquipment = (id, data) =>
  fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })

export const deleteEquipment = id =>
  fetch(`${API_URL}/${id}`, { method: 'DELETE' })
