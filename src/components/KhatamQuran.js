import { Badge, Button, Col, Container, Row } from "react-bootstrap";
import { Form } from "react-router-dom";
import { dateFormat, selisihHari } from "../helpers";

const KhatamQuran = ({ khatamQuran }) => {
  const number = [];
  for (let i = 1; i <= 30; i++) {
    number.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }

  return (
    <div className="py-5">
      <Container>
        <h1 className="text-center text-teal-600">Khatam Quran</h1>
        {khatamQuran?.length === undefined || dateFormat(khatamQuran?.slice(-1)[0]?.createdAt) !== dateFormat(Date.now()) ? (
          <div className="mt-5">
            <Form method="post">
              <Row>
                <input type="hidden" name="day" id="day" value={khatamQuran?.length === undefined && dateFormat(Date.now()) === "23 Maret 2023" ? 1 : selisihHari("2023-03-23") + 1} />
                <Col md={2} xs={3}>
                  <div className="mb-3 text-center">
                    <label className="form-label">
                      <Badge bg="teal-500">Juz</Badge>
                    </label>
                    <select className="form-select" aria-label="Juz" name="juz" id="juz" required>
                      {number}
                    </select>
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="mb-3 text-center">
                    <label className="form-label">
                      <Badge bg="teal-500">Dari Surat</Badge>
                    </label>
                    <input type="text" className="form-control" placeholder="Nama Surat" name="fromSurah" id="fromSurah" required />
                  </div>
                </Col>
                <Col md={2} xs={3}>
                  <div className="mb-3 text-center">
                    <label className="form-label">
                      <Badge bg="teal-500">Ayat</Badge>
                    </label>
                    <input type="number" className="form-control" placeholder="Nomor ayat" name="ayat1" id="ayat1" required />
                  </div>
                </Col>
                <Col md={3} xs={6}>
                  <div className="mb-3 text-center">
                    <label className="form-label">
                      <Badge bg="teal-500">Ke Surat</Badge>
                    </label>
                    <input type="text" className="form-control" placeholder="Nama Surat" name="toSurah" id="toSurah" required />
                  </div>
                </Col>
                <Col md={2} xs={6}>
                  <div className="mb-3 text-center">
                    <label className="form-label">
                      <Badge bg="teal-500">Ayat</Badge>
                    </label>
                    <input type="number" className="form-control" placeholder="Nomor ayat" name="ayat2" id="ayat2" required />
                  </div>
                </Col>
              </Row>
              <input type="hidden" name="_action" value="createKhatam" />
              <Row className="text-center">
                <Col>
                  <Button variant="outline" className="bg-teal-500 text-white w-25" type="submit">
                    Kirim
                  </Button>
                </Col>
              </Row>
            </Form>
          </div>
        ) : null}

        <div className="table-responsive-sm mt-5 text-center">
          <table className="table table-bordered">
            <thead className="bg-teal-500 text-white">
              <tr>
                <th>Hari Ke-</th>
                <th>Juz</th>
                <th>Dari Surat</th>
                <th>Ayat</th>
                <th>Ke Surat</th>
                <th>Ayat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {khatamQuran?.length >= 1 ? (
                khatamQuran.map((khatam) => (
                  <tr key={khatam.id}>
                    <td>{khatam.day}</td>
                    <td>{khatam.juz}</td>
                    <td>{khatam.fromSurah}</td>
                    <td>{khatam.ayat1}</td>
                    <td>{khatam.toSurah}</td>
                    <td>{khatam.ayat2}</td>
                    <td>
                      {dateFormat(khatam.createdAt) === dateFormat(Date.now()) ? (
                        <Form method="post">
                          <input type="hidden" name="_action" value="deleteKhatam" />
                          <input type="hidden" name="khatamId" value={khatam.id} />
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
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={7}>Tidak ada setoran surat & ayat</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </div>
  );
};

export default KhatamQuran;
