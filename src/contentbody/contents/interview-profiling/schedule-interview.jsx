import React from 'react';
import './schedule-interview.css';
import Datetime from 'react-datetime';

class ScheduleInterview extends React.Component{
  render() {
		let date = new Date();
    return (
      <div className="schedule-interview-class">
        <table>
					<tbody>
						<tr>
							<td>Choose Date and Time:</td>
							<td><Datetime closeOnSelect={true}/></td>
						</tr>
						<tr>
							<td>Select Expertise:</td>
							<td>
								<select>
									<option value="Java.Core">Java Core</option>
									<option value="Java.Core">Java WebServices</option>
									<option value="Java.Core">BBSI</option>
								</select>
							</td>
						</tr>
					</tbody>
        </table>
      </div>
    );
  }
}

export default ScheduleInterview;
