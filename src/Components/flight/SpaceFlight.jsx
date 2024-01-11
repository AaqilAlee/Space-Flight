import React, { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./FlightCard.css";

const SpaceFlight = () => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches");
    const allproduct = await response.json();
    setData(allproduct);
  };

  useEffect(() => {
    getData();
  }, []);
  const [filterSuccess, setFilterSuccess] = useState(data);
  const formatDate = (d) => {
    const date = new Date(d);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  useEffect(() => {
    const filteredSearch = data.filter((item) => {
      return item.mission_name.toLowerCase().includes(search.toLowerCase());
    });

    if (status === "") {
      setFilterSuccess(filteredSearch);
    } else {
      const updatedList = filteredSearch.filter(
        (curStatus) => curStatus.launch_success === (status === "success")
      );
      setFilterSuccess(updatedList);
    }
  }, [status, data, search]);

  

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
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Button
                      variant="primary"
                      className="search_form2"
                      onClick={() => setSearch(search)}
                    >
                      Search
                    </Button>
                  </div>
                </Col>
                <Col lg={6} md={6}>
                  <Row>
                    <Col lg={6} md={6}>
                      <Form.Select
                        aria-label="Default select example"
                        className=" mb-3 rounded-1"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value={""}>Select status</option>
                        <option value="success">Success</option>
                        <option value="failure">failure</option>
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
          {/* <FlightCard search={search} status={status} data={filteredLaunches}/> */}
        </Container>
      </section>
      <section className="mt-5 px-1">
        <Container>
          <Row>
            {filterSuccess.map((curElem, index) => {
              return (
                <>
                  <Col lg={4} md={6} className="mb-3" key={index}>
                    <div className="border rounded-1 ">
                      <div>
                        <img
                          src={curElem?.links?.mission_patch_small || ""}
                          alt=""
                          className="img-fluid card_img my-4"
                        />
                        <p className="text-center mb-0  text-secondary">
                          Launch date:{" "}
                          {formatDate(curElem?.launch_date_local) || ""}
                        </p>
                        <h4 className="text-center text-capitalize">
                          {curElem?.mission_name || ""}
                        </h4>
                        <p className="text-center mb-0 text-secondary">
                          {curElem?.rocket?.rocket_id || ""}
                        </p>

                        <h4 className="text-center text-capitalize text-secondary mt-4">
                          launch status:
                        </h4>
                        <p className="text-center mt-4">
                          {curElem?.launch_success ? (
                            <span className="text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-success">
                              Success
                            </span>
                          ) : (
                            <span className="text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-danger">
                              Failed
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default SpaceFlight;
