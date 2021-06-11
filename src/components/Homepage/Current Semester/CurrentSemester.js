import React from 'react';

const CurrentSemester = () => {
    return(
        <div>
            <h1>Current Semester</h1>
            <h3 className="">Spring 2021</h3>
                <div className="pa2">
                    <div className="overflow-auto">
                        <table className="f6 w-100 center" cellSpacing="0">
                        <thead>
                            <tr className="stripe-dark">
                                <th className="f4 pa3 bg-dark-gray white">Course No</th>
                                <th className="f4 pa3 bg-dark-gray white">Course Title</th>
                                <th className="f4 pa3 bg-dark-gray white">Out of 30</th>
                                <th className="f4 pa3 bg-dark-gray white">Midterm</th>
                                <th className="f4 pa3 bg-dark-gray white">Final</th>
                                <th className="f4 pa3 bg-dark-gray white">Total</th>
                                <th className="f4 pa3 bg-dark-gray white">Grade</th>
                            </tr>
                        </thead>
                        <tbody className="lh-copy">
                            <tr className="stripe-dark">
                                <td className="f5 pa3 b">CSE 301</td>
                                <td className="f5 pa3 b">Advanced Programming</td>
                                <td className="f5 pa3 b">28</td>
                                <td className="f5 pa3 b">28</td>
                                <td className="f5 pa3 b">38</td>
                                <td className="f5 pa3 b">94</td>
                                <td className="f5 pa3 b">A+</td>
                            </tr>
                            <tr className="stripe-dark">
                                <td className="f5 pa3 b">CSE 302</td>
                                <td className="f5 pa3 b">Advanced Programming Lab</td>
                                <td className="f5 pa3 b">30</td>
                                <td className="f5 pa3 b">29</td>
                                <td className="f5 pa3 b">37</td>
                                <td className="f5 pa3 b">96</td>
                                <td className="f5 pa3 b">A+</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
        </div>
    )
}

export default CurrentSemester;