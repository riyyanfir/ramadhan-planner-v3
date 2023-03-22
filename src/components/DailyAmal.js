import { useState } from "react";
import { Badge, Button, ButtonGroup, Col, Container, Modal, Row, Table } from "react-bootstrap";
import { Form } from "react-router-dom";
import { dateFormat, dateFormatOnlyDay, selisihHari } from "../helpers";

const DailyAmal = ({ dailyAmal }) => {
  const [show, setShow] = useState(false);
  const [idDaily, setIdDaily] = useState("");

  const data = dailyAmal?.filter((x) => x.id === idDaily)[0];

  const checkList = [
    "Sholat Qobliyah Subuh",
    "Sholat Subuh",
    "Dzikir Pagi",
    "Sholat Dhuha",
    "Sholat Qobliyah Dzuhur",
    "Sholat Dzuhur",
    "Sholat Ba'diyah Dzuhur",
    "Sholat Qobliyah Ashar",
    "Sholat Ashar",
    "Dzikir Petang",
    "Sholat Maghrib",
    "Sholat Ba'diyah Maghrib",
    "Sholat Qobliyah Isya'",
    "Sholat Isya'",
    "Sholat Ba'diyah Isya'",
    "Sholat Tarawih",
    "Sholat Tahajud",
    "Tilawah Al-Qur'an",
    "Tidak Tidur Habis Subuh",
    "Olahraga",
    "Sedekah",
  ];

  const checkList1 = checkList.splice(0, 7);
  const checkList2 = checkList.splice(0, 7);
  const checkList3 = checkList.splice(0, 7);

  const compList = [];

  for (let i = 0; i < 3; i++) {
    compList.push(
      <Col md={4} xs={4} key={i}>
        {i === 0
          ? checkList1.map((cl1, index) => (
              <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" name={cl1.replace(/\s+/g, "_")} id={cl1.replace(/\s+/g, "_")} />
                <label className="form-check-label checklist-amal" htmlFor={cl1.replace(/\s+/g, "_")}>
                  {cl1}
                </label>
              </div>
            ))
          : i === 1
          ? checkList2.map((cl2, index) => (
              <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" name={cl2.replace(/\s+/g, "_")} id={cl2.replace(/\s+/g, "_")} />
                <label className="form-check-label checklist-amal" htmlFor={cl2.replace(/\s+/g, "_")}>
                  {cl2}
                </label>
              </div>
            ))
          : checkList3.map((cl3, index) => (
              <div className="form-check" key={index}>
                <input className="form-check-input" type="checkbox" name={cl3.replace(/\s+/g, "_")} id={cl3.replace(/\s+/g, "_")} />
                <label className="form-check-label checklist-amal" htmlFor={cl3.replace(/\s+/g, "_")}>
                  {cl3}
                </label>
              </div>
            ))}
      </Col>
    );
  }

  return (
    <div className="py-5 bg-teal-500">
      <Container>
        <h1 className="text-white text-center mb-4">Daily Amal</h1>
        {dailyAmal?.length === undefined || dateFormat(dailyAmal?.slice(-1)[0]?.createdAt) !== dateFormat(Date.now()) ? (
          <Form method="post">
            <Row>
              <Col md={4} className="mb-3">
                <div className="input-group">
                  <span className="input-group-text fw-bold text-teal-600 bg-white">Hari</span>
                  <input placeholder="Hari" name="day" id="day" aria-label="Hari" className="form-control text-center" value={dateFormatOnlyDay(Date.now())} readOnly />
                </div>
              </Col>
              <Col md={{ span: 5, offset: 3 }} className="mb-3">
                <div className="input-group">
                  <span className="input-group-text fw-bold text-teal-600 bg-white">Tanggal</span>
                  <input placeholder="Hari" name="date" id="date" aria-label="Hari" className="form-control text-center" value={dateFormat(Date.now())} readOnly />
                </div>
              </Col>
            </Row>
            <Row className="bg-white mt-3 mb-4 rounded text-teal-600 checklist-row">{compList}</Row>
            <Row>
              <Col>
                <div>
                  <label className="form-label text-center text-white fw-bold fs-5 w-100" htmlFor="write">
                    Catatan Pribadi
                  </label>
                  <textarea className="form-control" name="write" id="write" rows="3" placeholder="Isi dengan apa yang perlu menjadi catatan..."></textarea>
                </div>
              </Col>
            </Row>
            <input type="hidden" className="form-control" name="daysTo" id="daysTo" value={dailyAmal?.length === undefined && dateFormat(Date.now()) === "23 Maret 2023" ? 1 : selisihHari("2023-03-23") + 1} />
            <input type="hidden" name="_action" value="createDailyAmal" />
            <Row className="text-center mt-3">
              <Col>
                <Button variant="outline" className="bg-white text-teal-600 w-25 fw-bold" type="submit">
                  Kirim
                </Button>
              </Col>
            </Row>
          </Form>
        ) : (
          <Table className="bg-white text-center" striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Hari Ke-</th>
                <th>Tanggal</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dailyAmal &&
                dailyAmal.map((daily) => (
                  <tr key={daily.id}>
                    <td>{daily.daysTo}</td>
                    <td>{daily.date}</td>
                    <td>
                      <ButtonGroup>
                        <Button
                          variant="outline"
                          size="sm"
                          className="bg-teal-600 text-white mx-2"
                          onClick={() => {
                            setShow(!show);
                            setIdDaily(daily.id);
                          }}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-up-left" viewBox="0 0 16 16">
                            {" "}
                            <path
                              fillRule="evenodd"
                              d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"
                            />{" "}
                            <path fillRule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z" />{" "}
                          </svg>{" "}
                          Lihat
                        </Button>
                        {dateFormat(daily.createdAt) === dateFormat(Date.now()) ? (
                          <Form method="post">
                            <input type="hidden" name="_action" value="deleteDaily" />
                            <input type="hidden" name="dailyId" value={daily.id} />
                            <Button variant="outline" size="sm" className="bg-red-500 text-white fw-bold" type="submit">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                {" "}
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />{" "}
                                <path
                                  fillRule="evenodd"
                                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                />{" "}
                              </svg>{" "}
                              Hapus
                            </Button>
                          </Form>
                        ) : null}
                      </ButtonGroup>
                    </td>
                  </tr>
                ))}
            </tbody>
          </Table>
        )}

        <Modal show={show} fullscreen="sm-down" onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title>
              <Badge bg="teal-600">Daily Aamal ({data?.date})</Badge>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              {data && data?.act.length <= 7 ? (
                <Row>
                  <Col>
                    {data?.act.map((d, index) => (
                      <p key={index} className="text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                          {" "}
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />{" "}
                        </svg>{" "}
                        {d.replaceAll("_", " ")}
                      </p>
                    ))}
                  </Col>
                </Row>
              ) : data?.act.length > 7 && data?.act.length <= 14 ? (
                <Row>
                  <Col md={6}>
                    {data?.act?.slice(0, 7).map((d, index) => (
                      <p key={index} className="text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                          {" "}
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />{" "}
                        </svg>{" "}
                        {d.replaceAll("_", " ")}
                      </p>
                    ))}
                  </Col>
                  <Col md={6}>
                    {data?.act?.slice(7).map((d, index) => (
                      <p key={index} className="text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                          {" "}
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />{" "}
                        </svg>{" "}
                        {d.replaceAll("_", " ")}
                      </p>
                    ))}
                  </Col>
                </Row>
              ) : (
                <Row>
                  <Col md={4} xs={4}>
                    {data?.act?.slice(0, 7).map((d, index) => (
                      <p key={index} className="text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                          {" "}
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />{" "}
                        </svg>{" "}
                        {d.replaceAll("_", " ")}
                      </p>
                    ))}
                  </Col>
                  <Col md={4} xs={4}>
                    {data?.act?.slice(7, 14).map((d, index) => (
                      <p key={index} className="text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                          {" "}
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />{" "}
                        </svg>{" "}
                        {d.replaceAll("_", " ")}
                      </p>
                    ))}
                  </Col>
                  <Col md={4} xs={4}>
                    {data?.act?.slice(14, 21).map((d, index) => (
                      <p key={index} className="text-teal-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-square-fill" viewBox="0 0 16 16">
                          {" "}
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 1 .011 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.75.75 0 0 1 1.08-.022z" />{" "}
                        </svg>{" "}
                        {d.replaceAll("_", " ")}
                      </p>
                    ))}
                  </Col>
                </Row>
              )}
            </Container>
          </Modal.Body>
        </Modal>
      </Container>
    </div>
  );
};

export default DailyAmal;
