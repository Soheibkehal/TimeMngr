import axios from "axios";
import moment from "moment";

import { URL, user_id, loggedHeaders } from "../config/constants";
axios.defaults.headers = loggedHeaders;

export const getLastWorkingTime = async (time) => {
  const start = moment(time, "HH:mm:ss")
    .subtract(10, "seconds")
    .format("HH:mm:ss");

  const end = moment(time, "HH:mm:ss")
    .add(10, "seconds")
    .format("HH:mm:ss");

  const startDate = `${moment().format("YYYY-MM-DD")} ${start}`;
  const endDate = `${moment().format("YYYY-MM-DD")} ${end}`;

  const workingtimes = await getWorkingtimes(startDate, endDate);
  return workingtimes[0];
};

export const getWorkingtimes = async (start, end) => {
  const response = await axios.get(
    `${URL}/workingtimes/${user_id}?start=${start}&end=${end}`,
    { headers: loggedHeaders }
  );

  const workingtimes = response.data.data;

  return workingtimes;
};

export const addWorkingtime = async (start, end) => {
  const data = JSON.stringify({
    working_time: {
      start,
      end,
    },
  });

  const config = {
    method: "post",
    url: `${URL}/api/workingtimes/${user_id}`,
    data,
  };

  await axios(config);
};

export const updateWorkingtime = async (start, end, id) => {
  const data = JSON.stringify({
    working_time: {
      start,
      end,
    },
    id,
  });

  const config = {
    method: "post",
    url: `${URL}/api/workingtimes/${user_id}`,
    data,
  };

  await axios(config);
};

export const deleteWorkingtime = async (id) => {
  const config = {
    method: "delete",
    url: `${URL}/api/workingtimes/${user_id}/${id}`,
  };

  await axios(config);
};

export const WorkedtimesforChart = async () => {
    const start = moment().startOf('week')
    .format("HH:mm:ss");

  const end = moment().endOf('week')
    .format("HH:mm:ss");

  const startDate = `${moment().format("YYYY-MM-DD")} ${start}`;
  const endDate = `${moment().format("YYYY-MM-DD")} ${end}`;

  //const workingtimes = await getWorkingtimes(startDate, endDate);
  //to delete after test
  const workingtimes = [
    {
      "end":"2020-11-03T14:30:24",
      "id":4,
      "start":"2020-11-03T09:43:58"
    },
    {
      "end":"2020-11-04T17:23:00",
      "id":5,
      "start":"2020-11-04T08:00:07"
    },
    {
      "end":"2020-11-02T18:28:00",
      "id":8,
      "start":"2020-11-02T08:00:00"
    },
    {
      "end":"2020-11-01T18:28:00",
      "id":8,
      "start":"2020-11-01T08:00:00"
    }
   ];//, "YYYY-MM-DDTHH:MM:SS"
   let aWorkedTime = [0, 0, 0, 0, 0, 0, 0];
   let aShouldHaveWorked = [9,9,9,9,9,0,0];
   let i = 0
   for (let i = 0; i < workingtimes.length; i++) {
    let wt = workingtimes[i];
    aWorkedTime[moment(wt.start).day()] = moment(wt.end).diff(moment(wt.start), "hours");
    /*if (i + 1 < workingtimes.length && moment(workingtimes[i + 1]).diff(moment(wt), "days") == 0) {
      console.log("eh");
      wt = workingtimes[i + 1];
      aWorkedTime[i] += moment(wt.end).diff(moment(wt.start), "hours");
      i++;
    }*/
   }
   for (let i = 1; i < 7; i++) {
     aShouldHaveWorked[i] += aShouldHaveWorked[i - 1] - aWorkedTime[i - 1];
   }
  return {
      labels: ['Monday', 'Tuesday', 'Wednesday', "Thursday", "Friday", "Saturday", "Sunday"],
      datasets: [
          {
          label: 'Worked time',
          backgroundColor: 'rgba(248,121,121, 0.7)',
          data: aWorkedTime
          },
          {
          label: 'Working times',
          backgroundColor: 'rgba(223,200,36, 0.7)',
          strokeColor: "#f87979",
          pointStrokeColor: "#f87979",
          data: aShouldHaveWorked
          },
      ]
  };
}

