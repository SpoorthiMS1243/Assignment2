import { useEffect, useState } from 'react'
import EquipmentForm from './EquipmentForm'
import EquipmentTable from './EquipmentTable'
import {
  getEquipment,
  addEquipment,
  updateEquipment,
  deleteEquipment
} from './api'

export default function App() {
  const [equipment, setEquipment] = useState([])
  const [editing, setEditing] = useState(null)

  const loadData = async () => {
    const data = await getEquipment()
    setEquipment(data)
  }

  useEffect(() => {
    loadData()
  }, [])

  const handleSave = async data => {
    if (editing) {
      await updateEquipment(editing.id, data)
      setEditing(null)
    } else {
      await addEquipment(data)
    }
    loadData()
  }

  const handleDelete = async id => {
    await deleteEquipment(id)
    loadData()
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Equipment Management</h2>

      <EquipmentForm onSubmit={handleSave} editing={editing} />

      <EquipmentTable
        data={equipment}
        onEdit={setEditing}
        onDelete={handleDelete}
      />
    </div>
  )
}
