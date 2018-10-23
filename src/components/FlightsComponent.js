import React from "react";
import FilterableTable from "react-filterable-table";

const FlightComponent = props => {
  let dataToShow = []
  console.log(Object.keys(props.flights).length)
  if (Object.keys(props.flights).length > 0) {
      console.log("here is me")
      props.type === 'arrivals' ? dataToShow = props.flights.arrivals :
        dataToShow = props.flights.departures
  }
  console.log("component props : ", props);
  const renderTime = props => {
    if (!props.value) {
      return null;
    }
    const date = new Date(props.value);
    const formatTime =
      ("0" + date.getUTCHours()).slice(-2) +
      ":" +
      ("0" + date.getUTCHours()).slice(-2);

    return <span>{formatTime}</span>;
  };

  const fields = [
    {
      name: "arrival_time",
      displayName: "Time",
      inputFilterable: true,
      sortable: true,
      render: renderTime
    },
    {
      name: "airline",
      displayName: "Airline",
      inputFilterable: true,
      sortable: true
    },
    { name: "destination", displayName: "Destination", inputFilterable: true },
    { name: "status", displayName: "Status", inputFilterable: true }
  ];
  console.log(dataToShow)
  return (
    <FilterableTable
      namespace="Flights"
      data={dataToShow}
      pagersVisible={false}
      fields={fields}
      noRecordsMessage="There are no flights to display"
      noFilteredRecordsMessage="No flights match your filters!"
    />
  );
};

export default FlightComponent;
