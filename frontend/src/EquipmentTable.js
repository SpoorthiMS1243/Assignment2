export default function EquipmentTable({ data, onEdit, onDelete }) {
  return (
    <table border="1" cellPadding="8">
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Status</th>
          <th>Last Cleaned</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.status}</td>
           <td className="border border-gray-300 p-2">
                {item.last_cleaned
                  ? new Date(item.last_cleaned).toLocaleDateString()
                  : '—'}
              </td>
            <td>
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
