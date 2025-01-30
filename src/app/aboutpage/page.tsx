import { events } from '@/data/events';

export default function EventPage({ params }) {
  const { id } = params;
  const event = events.find((e) => e.id.toString() === id);

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h1 className="text-3xl font-bold text-red-500">Event Not Found</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-10">
      <h1 className="text-5xl font-bold text-blue-700 mb-4">{event.title}</h1>
      <p className="text-lg text-gray-700 max-w-2xl">{event.description}</p>
      <span className="mt-5 text-md font-semibold text-gray-600">
        Date: {event.date}
      </span>
    </div>
  );
}