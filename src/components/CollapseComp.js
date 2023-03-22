import React, { useContext } from "react";
import { Accordion, AccordionContext, Badge, Card, Col, Container, Row, Stack, useAccordionButton } from "react-bootstrap";

const ContextAwareToggle = ({ children, eventKey, callback }) => {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <Card.Header className={isCurrentEventKey ? "bg-gray text-teal-500" : "bg-teal-600 text-white"} onClick={decoratedOnClick}>
      <Stack direction="horizontal" gap={3} className="px-3">
        {isCurrentEventKey ? (
          <h3>
            <Badge bg="teal-600">{children}</Badge>
          </h3>
        ) : (
          <h3>{children}</h3>
        )}
        <div className="ms-auto">
          {isCurrentEventKey ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
              {" "}
              <path fillRule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />{" "}
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
              {" "}
              <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />{" "}
            </svg>
          )}
        </div>
      </Stack>
    </Card.Header>
  );
};

const CollapseComp = () => {
  return (
    <div className="py-5 bg-teal-500">
      <Container>
        <h1 className="text-white text-center mb-4">Seputar Ramadhan</h1>
        <Accordion defaultActiveKey="0">
          <Card>
            <ContextAwareToggle eventKey="0">Fiqih Ramadhan</ContextAwareToggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <Row className="px-3">
                  <Col md={6}>
                    <h4 className="fw-bold text-teal-600">Hukum Puasa Ramadhan</h4>
                    <p className="mb-4">
                      Puasa Ramadhan hukumnya wajib berdasarkan Firman Allah Ta'ala
                      <br />
                      <br />
                      "Wahai orang-orang yang beriman! Diwajibkan atas kamu berpuasa sebagaimana diwajibkan atas orang sebelum kamu agar kamu bertakwa"
                      <br />
                      (Al-Baqarah : 183)
                    </p>
                    <h4 className="fw-bold text-teal-600">Rukun Puasa</h4>
                    <p className="mb-4">
                      1. Menahan diri dari hal-hal yang membatalkan puasa
                      <br />
                      2. Menepati rentang waktu puasa
                    </p>
                    <h4 className="fw-bold text-teal-600">Syarat Sah Puasa</h4>
                    <p className="mb-4">
                      1. Islam
                      <br />
                      2. Baligh
                      <br />
                      3. Berakal
                      <br />
                      4. Muqim (sedang tidak safar) <br />
                      5. Suci dari haid dan nifas
                      <br />
                      6. Mampu berpuasa
                      <br />
                      7. Niat
                    </p>
                  </Col>
                  <Col md={6}>
                    <h4 className="fw-bold text-teal-600">Sunnah Ketika Berpuasa</h4>
                    <p className="mb-4">
                      1. Menyegerakan berbuka <br />
                      2. Mengakhiri sahur
                      <br />
                      3. Meninggalkan perbuatan yang dilarang Agama
                      <br />
                      4. Memperbanyak ketaatan
                      <br />
                      5. Membaca Al-Qur'an
                    </p>
                    <h4 className="fw-bold text-teal-600">Orang-Orang yang Diperbolehkan Tidak Puasa</h4>
                    <p>
                      1. Orang sakit yang membahayakan jika berpuasa
                      <br />
                      2. Musafir
                      <br />
                      3. Orang yang sudah tua renta
                      <br />
                      4. Wanita hamil dan menyusui
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <ContextAwareToggle eventKey="1">Sunnah Berbuka Puasa</ContextAwareToggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <div className="px-3">
                  <h4 className="fw-bold text-teal-600">1. Segerakanlah Berbuka Puasa</h4>
                  <p className="mb-4">
                    Dari Sahl bin Sa'ad Radhiyallah 'anhu, Rasulullah SAW bersabda "Senantiasa manusia berada di dalam kebaikan selama menyegerakan berbuka."
                    <br /> (HR. Bukhari 4/173 dan Muslim 1093) <br /> <br /> Dari Abu Hurairah Radhiyallahu 'anhu, Rasulullah SAW bersabda, "Agama ini akan senantiasa menang selama manusia menyegerakan berbuka, karena orang-orang Yahudi dan
                    Nasrani mengakhirkannya"
                    <br /> (HR. Abu Dawud 2/305, Ibnu Hibban 223, sanadnya Hasan)
                  </p>
                  <h4 className="fw-bold text-teal-600">2. Makanan Sunnah untuk Berbuka Puasa dan Doa Berbuka Puasa</h4>
                  <p className="mb-4">
                    Ketika mendengar adzan maghrib, ucapkanlah basmalah kemudian berbukalah dengan ruthab (kurma basah) atau tamr (kurma kering) atau seteguk air. Setelah itu baru membaca doa berbuka puasa dan nyatakan dalam doamu bahwa
                    puasamu hanya untuk Allah, bersyukur atas rezeki-Nya, dan mohon bantuan-Nya atas segala sesuatu.
                    <br /> <br /> Dari Salman bin 'Amr Adh Dhobbi radhiyallahu'anhu. Dari Nabi Saw, beliau bersabda, "Jika salah seorang diantara kalian berbuka, maka berbukalah dengan tamr (kurma kering). Jika tidak didapati kurma, maka
                    berbukalah dengan air karna air itu mensucikan."(Ibnu Hajar Al Asqoni rahimahullah dalam Bulughul Marom hadist no. 660) Rasulullah SAW apabila telah berbuka puasa, beliau berdoa, Dzahabaz zhama'u wabtallatil 'uruqu wa
                    tsabatal ajru, insya Allah. Telah hilang rasa haus dan urat-urat telah basah serta pahala sudah tetap. insya Allah." (Abu Dawud)
                  </p>
                  <h4 className="fw-bold text-teal-600">3. Berdoa, Ketika Berbuka Puasa</h4>
                  <p>
                    Dari 'Abdullah bin 'Amr bin Al 'Ash, ia berkata bahwa Rasulullah SAW bersabda, "Sesungguhnya do'a orang yang berpuasa ketika berbuka tidaklah tertolak."
                    <br /> (HR. Ibnu Majah no 1753)
                  </p>
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    </div>
  );
};

export default CollapseComp;
