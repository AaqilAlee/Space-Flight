// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import Flight from "../../asset/02.png";
// import "./FlightCard.css";
// import { useState, useEffect } from "react";

// const FlightCard = ({ search, status, data }) => {

//   const [searchResults, setSearchResults] = useState(search);
//   const [filter, setFilter] = useState({ status: status });
//   const [filterSuccess, setFilterSuccess] = useState();
 

//   useEffect(()=>{
//     setFilter({status: status})
//   }, [status])
// console.log(filter)
// //   const filterItem = (filter) => {
// //     const updatedList = data.filter((curElem) => {
// //         return curElem.launch_success === status;
// //     });
// //     setFilterSuccess(updatedList);
// // }

//   const formatDate = (d) => {
//     const date = new Date(d);
//     return date.toLocaleDateString("en-US", {
//       year: "numeric",
//       month: "short",
//       day: "numeric",
//     });
//   };

 
//   return (
//     <>
//       <section className="mt-5 px-1">
//         <Container>
//           <Row>
//             {data.map((curElem, index) => {
//               return (
//                 <>
//                   <Col lg={4} md={6} className="mb-3" key={index}>
//                     <div className="border rounded-1 ">
//                       <div>
//                         <img
//                           src={curElem?.links?.mission_patch_small || ""}
//                           alt=""
//                           className="img-fluid card_img my-4"
//                         />
//                         <p className="text-center mb-0  text-secondary">
//                           Launch date: {formatDate(curElem?.launch_date_local) || ""}
//                         </p>
//                         <h4 className="text-center text-capitalize">
//                           {curElem?.mission_name || ""}
//                         </h4>
//                         <p className="text-center mb-0 text-secondary">
//                           {curElem?.rocket?.rocket_id || ""}
//                         </p>

//                         <h4 className="text-center text-capitalize text-secondary mt-4">
//                           launch status:
//                         </h4>
//                         <p className="text-center mt-4">
//                           {curElem?.launch_success ? (
//                             <span className="text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-success">
//                               Success
//                             </span>
//                           ) : (
//                             <span className="text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-danger">
//                               Failed
//                             </span>
//                           )}
//                         </p>
//                       </div>
//                     </div>
//                   </Col>
//                 </>
//               );
//             })}
//             {/* <Col lg={4} md={6} className="mb-3">
//               <div className="border rounded-1 d-flex justify-content-center">
//                 <div>
//                   <img
//                     src={Flight}
//                     alt=""
//                     className="img-fluid card_img my-4"
//                   />
//                   <p className="text-center mb-0  text-secondary">
//                     Launch date: 25 Feb 2006
//                   </p>
//                   <h2 className="text-center text-capitalize">FalconSat</h2>
//                   <p className="text-center mb-0 text-secondary">Falcon1</p>

//                   <h4 className="text-center text-capitalize text-secondary mt-4">
//                     launch status:{" "}
//                   </h4>
//                   <p className="text-center mt-4">
//                     <span className="text-center text-light fw-bold px-3 py-1 rounded text-capitalize bg-danger">
//                       Failed
//                     </span>{" "}
//                   </p>
//                 </div>
//               </div>
//             </Col> */}
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default FlightCard;
