// import React, { useEffect, useState } from 'react'
// import { Col, Container, Row } from 'react-bootstrap'
// import "./FlightCard.css"

// const FlightCard = ({status, time, search}) => {
//   const [launches, setLaunches] = useState([]);
//   const [filter, setFilter] = useState({ status: status, time: time });

//   useEffect(() => {
//     setFilter({...filter, status: status, time: time})
//   }, [status, time])

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch('https://api.spacexdata.com/v3/launches');
//         const data = await response.json();
//         setLaunches(data);
//         console.log(data)
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     }
//     fetchData();
//   }, []);

//   const isInTime = (date, time) => {
//     const launchDate = new Date(date);
//     const currentTime = new Date();
//     const timeDifference = currentTime - launchDate;
//     console.log(launchDate, currentTime, timeDifference);
//     return timeDifference <= time;
//   }

//   const isStatus = (filterStatus, launchStatus) => {
//     return filterStatus === 'success' ? launchStatus === true : launchStatus === false
//   }

//   const filteredLaunches = launches.filter(launch => {
//     if (search !== "") {
//       const searchLowerCase = search.toLowerCase();
//       return launch.mission_name.toLowerCase().includes(searchLowerCase);
//     }
//     if (filter.status === 'all' && filter.time === 'all') {
//       return true;
//     }
//     if (filter.time === 'all') {
//       return isStatus(filter.status, launch.launch_success)
//     }

//     if (filter.status === 'all') {
//       return isInTime(launch.launch_date_local, filter.time)
//     } else {
//       return isInTime(launch.launch_date_local, filter.time) && isStatus(filter.status, launch.launch_success)
//     }
//   });

//   const formatDate = (d) => {
//     const date = new Date(d)
//     return date.toLocaleDateString('en-US', {
//       year: 'numeric',
//       month: 'short',
//       day: 'numeric'
//     })
//   }

//     return (
//         <>
//             <section className='mt-5 px-1'>
//                 <Container>
//                     <Row>
//                     {filteredLaunches.map((launch, index) => (
//                     <Col lg={4} md={6} className='mb-3' key={launch.flight_number + index}>
//                       <div className='border rounded-1 d-flex justify-content-center'>
//                           <div>
//                               <img src={launch?.links?.mission_patch} alt='' className='img-fluid card_img my-4' />
//                               <p className='text-center mb-0  text-secondary'>Launch date: {formatDate(launch?.launch_date_local)}</p>
//                               <h2 className='text-center text-capitalize'>{launch.mission_name}</h2>
//                               <p className='text-center mb-0 text-secondary'>{launch?.rocket?.rocket_name}</p>

//                               <h4 className='text-center text-capitalize text-secondary mt-4'>launch status:  </h4>
//                               <p className='text-center mt-4'>
//                                 {launch?.launch_success ? <span className='text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-success'>Success</span> : <span className='text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-danger'>Failed</span>}
//                               </p>
//                           </div>
//                       </div>
//                   </Col>
//                     ))}
//                     </Row>
//                 </Container>
//             </section>
//         </>
//     )
// }

// export default FlightCard

import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FlightCard from "./FlightCard";

const SpaceFlight = () => {
  const [status, setStatus] = useState('all')
  const [time, setTime] = useState('all')
  const [search, setSearch] = useState('')

  return (
    <>
      <section>
        <Container>
          <div className="my-5 mb-3">
            <h1 className="text-capitalize text-center mt-5">
              Spaceflight details
            </h1>
            <p className="text-center">
              Find out the elaborate features of all past big spaceflights.
            </p>
          </div>
          <div className="form_part">
            <Form>
              <Row>
                <Col lg={6} md={6}>
                  <div className="d-flex px-3 mb-3">
                    <input
                      type="search"
                      className="form-control search_form"
                      placeholder="search in here"
                      value={search}
                      onChange={e => setSearch(e.target.value)}
                    />
                    <Button variant="primary" className="rounded-0" onClick={() => setSearch(search)}>
                      Search
                    </Button>
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <Row>
                    <Col lg={6} md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className="mx-2 mx-sm-0 rounded-1"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                      >
                        <option value="all">Select status</option>
                        <option value="success">Success</option>
                        <option value="failed">failure</option>
                      </Form.Select>
                    </Col>
                    <Col lg={6} md={6}>
                      {/* <Form.Select
                        aria-label="Default select example"
                        className="mx-2 mx-sm-0 rounded-1"
                        value={time}
                        onChange={e => setTime(e.target.value)}
                      >
                        <option value="all">Select status</option>
                        <option value={1000  60  60 * 24}>Last 24 hours</option>
                        <option value={1000  60  60  24  7}>Last 7 days</option>
                        <option value={1000  60  60  24  30}>Last 30 days</option>
                        <option value={1000  60  60  24  30  12  10}>Last 10 years</option>
                        <option value={1000  60  60  24  30  12  30}>Last 30 years</option>
                      </Form.Select> */}
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
          <FlightCard status={status} time={time} search={search} />
        </Container>
      </section>
    </>
  );
};