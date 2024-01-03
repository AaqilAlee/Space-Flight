import React,{ useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FlightCard from "./FlightCard";

const SpaceFlight = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({ status: status });

  const getData = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches");
    const allproduct = await response.json();
    setData(allproduct);
  };

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    setFilter({...filter, status: status})
  })
 
  const filteredLaunches = data.filter((launch) => {
    if (search !== "f") {
      const searchLowerCase = search.toLowerCase();
      return launch.mission_name.toLowerCase().includes(searchLowerCase);
    }
  });

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
                  <div className="d-flex mb-3">
                    <input
                      type="search"
                      className="form-control search_form"
                      placeholder="search in here"
                      value={search}
                      onChange={(e)=>setSearch(e.target.value)}
                    />
                    <Button variant="primary" className="search_form2" onClick={() => setSearch(search)}>
                      Search
                    </Button>{" "}
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <Row>
                    <Col lg={6} md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className=" mb-3 rounded-1"
                        value={status}
                        onChange={e => setStatus(e.target.value)}
                      >
                        <option>Select status</option>
                        <option value="all">All</option>
                        <option value="success">Success</option>
                        <option value="failed">failure</option>
                      </Form.Select>
                    </Col>
                    <Col lg={6} md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className="rounded-1"
                      >
                        <option>Select status</option>
                        <option value="1">week</option>
                        <option value="2">days</option>
                        <option value="3">month</option>
                      </Form.Select>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Form>
          </div>
          <FlightCard search={search} status={status} data={filteredLaunches}/>
        </Container>
      </section>
    </>
  );
};

export default SpaceFlight;
