import { useParams } from 'react-router-dom'
import { events } from '../data/eventsData'

const EventRegistration = () => {
  const { eventId } = useParams()
  const event = events.find(e => e.id === eventId)

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-4xl font-bold mb-8">{event?.name}</h1>
      
      <div className="max-w-4xl mx-auto bg-gray-800 p-6 rounded-xl">
        <h2 className="text-2xl font-semibold mb-4">Registration</h2>
        
        <form className="space-y-6">
          <div>
            <label className="block mb-2">Registration Type</label>
            <select 
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
              required
            >
              <option value="">Select Category</option>
              <option value="UG">Undergraduate</option>
              <option value="PG">Postgraduate</option>
            </select>
          </div>

          <div>
            <label className="block mb-2">Team Size</label>
            <input
              type="number"
              min="1"
              max="5"
              className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600"
              placeholder="Enter team size (1 for individual)"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-all"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  )
}

export default EventRegistration