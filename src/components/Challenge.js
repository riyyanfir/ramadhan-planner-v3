import { Badge, Button, Col, Container, Row, Table } from "react-bootstrap";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

const Challenge = ({ challenge }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef();
  const focusRef = useRef();

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="pb-5">
      <Container>
        <h1 className="text-teal-600 text-center mb-4">List Ramadhan Challenge</h1>
        <Row>
          <Col md={6}>
            <Row className="mt-3">
              <Col md={12}>
                <fetcher.Form method="post" ref={formRef}>
                  <div className="input-group mb-3">
                    <input className="form-control" placeholder="Ramadhan challenge" aria-label="Ramadhan challenge" aria-describedby="Ramadhan challenge" name="newChallenge" id="newChallenge" required ref={focusRef} />
                    <input type="hidden" name="_action" value="createChallenge" />
                    <Button variant="outline" className="bg-teal-600 text-white" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
                        {" "}
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />{" "}
                      </svg>
                      Buat
                    </Button>
                  </div>
                </fetcher.Form>
                <div className="table-responsive-vertical overflow-auto">
                  <Table striped>
                    <thead>
                      <tr>
                        <th>Challenge</th>
                        <th>Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {challenge?.length >= 1 ? (
                        challenge.map((ch) => (
                          <tr key={ch.id}>
                            <td>{ch.name}</td>
                            <td>
                              <Form method="post">
                                <input type="hidden" name="_action" value="deleteChallenge" />
                                <input type="hidden" name="challengeId" value={ch.id} />
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
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan={2} className="text-center">
                            Tidak ada challenge
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="mt-4" md={(6, { order: "last" })} xs={{ order: "first" }}>
            <h3 className="fw-bold big-title lh-base">
              TARGETKAN <Badge bg="teal-600">RAMADHAN MU</Badge> DENGAN <Badge bg="teal-600">BAIK</Badge>
            </h3>
            <p className="mt-4">Mari isi Ramadhan mu dengan penuh tantangan kebaikan yang dapat kamu lakukan. Tantangan ini dapat membuat mu menjadi terpacu dalam menjalani Ramadhan kali ini dengan semangat dan target baru.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Challenge;
