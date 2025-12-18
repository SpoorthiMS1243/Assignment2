import { useState, useEffect } from 'react'

const emptyForm = {
  name: '',
  type: '',
  status: '',
  lastCleaned: ''
}

export default function EquipmentForm({ onSubmit, editing }) {
  const [form, setForm] = useState(emptyForm)

  // Normalize editing data (VERY IMPORTANT)
  useEffect(() => {
    if (editing) {
      setForm({
        name: editing.name ?? '',
        type: editing.type ?? '',
        status: editing.status ?? '',
        // handle both backend & frontend naming
        lastCleaned:
          editing.lastCleaned ??
          editing.last_cleaned ??
          ''
      })
    } else {
      setForm(emptyForm)
    }
  }, [editing])

  const handleChange = e => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (!form.name || !form.type || !form.status) {
      alert('All fields required')
      return
    }

    // Send clean payload to parent / API
    onSubmit({
      name: form.name,
      type: form.type,
      status: form.status,
      last_cleaned: form.lastCleaned || null
    })

    setForm(emptyForm)
  }

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-8 max-w-4xl">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">
        {editing ? 'Edit Equipment' : 'Add Equipment'}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end"
      >
        <input
          name="name"
          placeholder="Equipment Name"
          value={form.name || ''}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <select
          name="type"
          value={form.type || ''}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Type</option>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select
          name="status"
          value={form.status || ''}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 bg-white focus:ring-2 focus:ring-blue-500 outline-none"
        >
          <option value="">Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>

        <input
          type="date"
          name="lastCleaned"
          value={form.lastCleaned || ''}
          onChange={handleChange}
          className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          Save
        </button>
      </form>
    </div>
  )
}
