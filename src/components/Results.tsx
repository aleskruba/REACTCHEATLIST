
const Results = ({isLoading,hotelsDataFiltered,debounceLoading}:any) => {

  return (
    <div>
      {isLoading && <p>Loading...</p>}
        {hotelsDataFiltered?.map((hotel: any) => (
          <p key={hotel.hotelName}>{hotel.hotelName}</p>
        ))}
        <h1>{!hotelsDataFiltered?.length && !debounceLoading ? 'NO RECORD' : ''}</h1>
    </div>
  );

}

export default Results;
