import * as mongoose from 'mongoose';

export const DailyReportSchema = new mongoose.Schema({
  fips:  { type: Number, required: false },
  provinceState: String,
  countryRegion: String,
  createdAt: Date,
  combinedKey: String,
  active: Number,
  confirmed: Number,
  deaths: Number,
  recovered: Number,
  caseFatalityRatio: { type: Number, required: false },
  lat: { type: Number, required: false },
  incidenceRate: { type: Number, required: false },
  long: { type: Number, required: false },
  iso: String
});

