export interface ITicket {
  [key: string]: any;
  id: number;
  'Bus Name': string;
  Date: string;
  'Departure Time': string;
  Source: string;
  Destination: string;
  'Coach Type': string;
  'Total Fare': number;
  'Seat No': string[];
  'Passenger Details': User;
}

interface User {
  [key: string]: any;
  username: string;
  email: string;
  mobilenumber: number;
}
// / Math.floor(100000 + Math.random() * 900000)
