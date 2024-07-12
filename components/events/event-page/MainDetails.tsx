const MainDetails = ({ eventId }: { eventId: string }) => {
  return (
    <div>
      <h1 className="text-4xl">
        {eventId}
        Today your Day
      </h1>
    </div>
  );
};

export default MainDetails;
