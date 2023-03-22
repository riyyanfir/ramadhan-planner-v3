import Challenge from "../components/Challenge";
import DailyAmal from "../components/DailyAmal";
import Hero from "../components/Hero";
import KhatamQuran from "../components/KhatamQuran";
import NavbarComp from "../components/NavbarComp";
import CollapseComp from "../components/CollapseComp";
import Footer from "../components/Footer";
import { createChallenge, createDailyAmal, createKhatam, createUserName, deleteItem, fetchData } from "../helpers";
import { toast } from "react-toastify";
import { Form, useLoaderData } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import { useState } from "react";
import Countdown from "../components/Countdown";

export const dashboardLoader = () => {
  const userName = fetchData("userName");
  const challenge = fetchData("challenge");
  const dailyAmal = fetchData("dailyAmal");
  const khatamQuran = fetchData("khatamQuran");
  return { userName, challenge, dailyAmal, khatamQuran };
};

export const dashboardAction = async ({ request }) => {
  const data = await request.formData();

  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "createNewUser") {
    try {
      createUserName(values.newUser);
      return toast.success("Berhasil menambahkan Username");
    } catch (e) {
      throw new Error("Terdapat masalah dalam pembuatan Usernam.");
    }
  }

  if (_action === "createChallenge") {
    try {
      createChallenge({
        name: values.newChallenge,
      });
      return toast.success("Berhasil menambahkan Challenge");
    } catch (e) {
      throw new Error(`${e}Terdapat masalah dalam pembuatan Challenge.`);
    }
  }

  if (_action === "createDailyAmal") {
    const key = Object.keys(values).filter((key) => values[key] === "on");
    try {
      createDailyAmal({
        daysTo: values.daysTo,
        date: `${values.day}, ${values.date}`,
        act: key,
        write: values.write,
      });
      return toast.success("Berhasil menambahkan Daily Amal");
    } catch (e) {
      throw new Error("Terdapat masalah dalam penambahan Daily Amal.");
    }
  }

  if (_action === "createKhatam") {
    try {
      createKhatam({
        day: values.day,
        juz: values.juz,
        fromSurah: values.fromSurah,
        ayat1: values.ayat1,
        toSurah: values.toSurah,
        ayat2: values.ayat2,
      });
      return toast.success("Berhasil menambahkan list Khatam Qur'an");
    } catch (e) {
      throw new Error("Terdapat masalah dalam pembuatan Khatam Qur'an.");
    }
  }

  if (_action === "deleteChallenge") {
    try {
      deleteItem({
        key: "challenge",
        id: values.challengeId,
      });

      return toast.success("Berhasil menghapus list Challenge");
    } catch (e) {
      throw new Error("Terdapat masalah dalam menghapus list Challenge.");
    }
  }

  if (_action === "deleteDaily") {
    try {
      deleteItem({
        key: "dailyAmal",
        id: values.dailyId,
      });

      return toast.success("Berhasil menghapus list Daily Amal");
    } catch (e) {
      throw new Error("Terdapat masalah dalam menghapus list Daily Amal.");
    }
  }

  if (_action === "deleteKhatam") {
    try {
      deleteItem({
        key: "khatamQuran",
        id: values.khatamId,
      });

      return toast.success("Berhasil menghapus list Khatam Qur'an");
    } catch (e) {
      throw new Error("Terdapat masalah dalam menghapus Khatam Qur'an.");
    }
  }
};

const Dashboard = () => {
  const { userName, challenge, dailyAmal, khatamQuran } = useLoaderData();
  const [show, setShow] = useState(userName ? false : true);

  return (
    <div>
      {new Date("March 23, 2023 10:25:25").getTime() - new Date().getTime() <= 0 ? (
        <div>
          <Modal show={show} onHide={() => setShow(false)} backdrop="static" keyboard={false} centered>
            <Modal.Header>
              <Modal.Title>Mari buat Username mu!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form method="post">
                <input type="hidden" name="_action" value="createNewUser" />
                <div className="input-group">
                  <input type="text" className="form-control" name="newUser" placeholder="Masukan username" aria-label="Masukan username" aria-describedby="userName" required />
                  <Button variant="outline" className="bg-teal-600 text-white fw-bold" type="submit" onClick={() => setShow(false)}>
                    Tambah
                  </Button>
                </div>
              </Form>
            </Modal.Body>
          </Modal>
          <div className="hero">
            <div className="w-100 vh-100 position-absolute bg-teal-500 opacity-75"></div>
            <NavbarComp userName={userName} />
            <Hero />
          </div>
          <div className="pt-5">
            <Challenge challenge={challenge} />
            <DailyAmal dailyAmal={dailyAmal} />
            <KhatamQuran khatamQuran={khatamQuran} />
            <CollapseComp />
          </div>
          <Footer />
        </div>
      ) : (
        <Countdown />
      )}
    </div>
  );
};

export default Dashboard;
