import React, { useState } from 'react';
import { Plus, Building, Users, CheckCircle, Clock, Edit, Trash2, Eye } from 'lucide-react';

const EmployerPage = () => {
  const [activeTab, setActiveTab] = useState('jobs');
  const [showJobForm, setShowJobForm] = useState(false);

  const postedJobs = [
    {
      id: 1,
      title: 'พนักงานทำความสะอาด',
      type: 'งานประจำ',
      location: 'กรุงเทพมหานคร',
      salary: '12,000 - 15,000 บาท',
      applicants: 12,
      status: 'เปิดรับสมัคร',
      postedDate: '2025-01-15',
    },
    {
      id: 2,
      title: 'คนส่งอาหาร',
      type: 'งานไม่ประจำ',
      location: 'สามย่าน',
      salary: '400 - 600 บาท/วัน',
      applicants: 8,
      status: 'เปิดรับสมัคร',
      postedDate: '2025-01-18',
    },
    {
      id: 3,
      title: 'แม่บ้าน',
      type: 'งานประจำ',
      location: 'ลาดพร้าว',
      salary: '15,000 - 18,000 บาท',
      applicants: 15,
      status: 'ปิดรับสมัคร',
      postedDate: '2025-01-10',
    },
  ];

  const verificationRequests = [
    {
      id: 1,
      workerName: 'นางสมใจ ทำงาน',
      jobTitle: 'พนักงานทำความสะอาด',
      completedDate: '2025-01-20',
      workPeriod: '7 วัน',
      photos: ['photo1.jpg', 'photo2.jpg'],
      status: 'รอการตรวจสอบ',
    },
    {
      id: 2,
      workerName: 'นายสมชาย ขยัน',
      jobTitle: 'คนส่งอาหาร',
      completedDate: '2025-01-19',
      workPeriod: '14 วัน',
      photos: ['photo3.jpg'],
      status: 'รอการตรวจสอบ',
    },
  ];

  const stats = [
    { label: 'งานที่โพสต์', value: '23', icon: Building },
    { label: 'ผู้สมัครทั้งหมด', value: '156', icon: Users },
    { label: 'งานที่เสร็จสิ้น', value: '18', icon: CheckCircle },
    { label: 'รอการตรวจสอบ', value: '3', icon: Clock },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            แดชบอร์ดนายจ้าง
          </h1>
          <p className="text-xl text-gray-600">
            จัดการงานและตรวจสอบผลการทำงาน
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('jobs')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'jobs'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                งานที่โพสต์
              </button>
              <button
                onClick={() => setActiveTab('verification')}
                className={`py-4 px-2 border-b-2 font-medium text-sm ${
                  activeTab === 'verification'
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                การตรวจสอบงาน
              </button>
            </nav>
          </div>

          <div className="p-6">
            {/* Posted Jobs Tab */}
            {activeTab === 'jobs' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-gray-900">งานที่โพสต์ทั้งหมด</h2>
                  <button
                    onClick={() => setShowJobForm(true)}
                    className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    โพสต์งานใหม่
                  </button>
                </div>

                <div className="space-y-4">
                  {postedJobs.map((job) => (
                    <div
                      key={job.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {job.title}
                              </h3>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>{job.type}</span>
                                <span>{job.location}</span>
                                <span>{job.salary}</span>
                              </div>
                            </div>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                job.status === 'เปิดรับสมัคร'
                                  ? 'bg-green-100 text-green-800'
                                  : 'bg-red-100 text-red-800'
                              }`}
                            >
                              {job.status}
                            </span>
                          </div>

                          <div className="flex items-center space-x-6 text-sm text-gray-600 mb-4">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 mr-1" />
                              {job.applicants} ผู้สมัคร
                            </div>
                            <div>โพสต์เมื่อ: {job.postedDate}</div>
                          </div>
                        </div>

                        <div className="flex space-x-2 lg:ml-6">
                          <button className="p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200">
                            <Eye className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-200">
                            <Edit className="h-4 w-4" />
                          </button>
                          <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200">
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Job Verification Tab */}
            {activeTab === 'verification' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">
                  รอการตรวจสอบและออกใบรับรอง
                </h2>

                <div className="space-y-6">
                  {verificationRequests.map((request) => (
                    <div
                      key={request.id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200"
                    >
                      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                {request.workerName}
                              </h3>
                              <p className="text-gray-600 mb-2">งาน: {request.jobTitle}</p>
                              <div className="flex items-center space-x-4 text-sm text-gray-600">
                                <span>เสร็จเมื่อ: {request.completedDate}</span>
                                <span>ระยะเวลา: {request.workPeriod}</span>
                              </div>
                            </div>
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                              {request.status}
                            </span>
                          </div>

                          <div className="mb-4">
                            <h4 className="text-sm font-medium text-gray-900 mb-2">
                              รูปภาพผลงาน ({request.photos.length} รูป)
                            </h4>
                            <div className="flex space-x-2">
                              {request.photos.map((photo, index) => (
                                <div
                                  key={index}
                                  className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-xs text-gray-500"
                                >
                                  รูปที่ {index + 1}
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                            <h4 className="text-sm font-medium text-yellow-800 mb-2">
                              ขั้นตอนการตรวจสอบ:
                            </h4>
                            <ol className="text-sm text-yellow-700 space-y-1">
                              <li>1. ตรวจสอบรูปภาพผลงาน</li>
                              <li>2. ประเมินคุณภาพการทำงาน</li>
                              <li>3. ยืนยันการทำงานเสร็จสิ้น</li>
                              <li>4. ระบบจะออกใบรับรองให้ผู้ทำงานโดยอัตโนมัติ</li>
                            </ol>
                          </div>
                        </div>

                        <div className="flex flex-col space-y-2 lg:ml-6 mt-4 lg:mt-0">
                          <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
                            ยืนยันงานเสร็จ
                          </button>
                          <button className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200">
                            งานไม่ผ่าน
                          </button>
                          <button className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200">
                            ขอข้อมูลเพิ่ม
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {verificationRequests.length === 0 && (
                  <div className="text-center py-12">
                    <CheckCircle className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      ไม่มีงานรอการตรวจสอบ
                    </h3>
                    <p className="text-gray-600">
                      เมื่อมีคนทำงานเสร็จสิ้น รายการจะปรากฏที่นี่
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Job Posting Form Modal */}
        {showJobForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">โพสต์งานใหม่</h2>
                <button
                  onClick={() => setShowJobForm(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              </div>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ชื่อตำแหน่งงาน
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="เช่น พนักงานทำความสะอาด"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ประเภทงาน
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                      <option>งานประจำ</option>
                      <option>งานไม่ประจำ</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      สถานที่ทำงาน
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="เช่น กรุงเทพมหานคร"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    เงินเดือน/ค่าจ้าง
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="เช่น 12,000 - 15,000 บาท"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    รายละเอียดงาน
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="อธิบายรายละเอียดงาน หน้าที่ความรับผิดชอบ..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    ความต้องการ
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="ระบุคุณสมบัติ ทักษะ หรือประสบการณ์ที่ต้องการ..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      อายุ (ปี)
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="เช่น 18-50"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      จำนวนที่รับ
                    </label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="1"
                    />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setShowJobForm(false)}
                    className="flex-1 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                  >
                    ยกเลิก
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                  >
                    โพสต์งาน
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployerPage;