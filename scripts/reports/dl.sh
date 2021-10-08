#!/bin/bash
echo "[dl.sh] executing shell dl script..."
files_url=https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports
# data_dir=data/dailyReports
data_dir=$2
cd $data_dir
pwd
curl -OLk "$files_url/$1.csv"

# check that reports with the same name do not exist inside target directory
echo "CSV was downloaded for date: $1 at $2"
