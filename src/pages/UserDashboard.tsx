import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit, Settings, Bell, FileText, Briefcase, Calendar, TrendingUp, Award, Download, Building, Star, CheckCircle } from 'lucide-react';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userProfile = {
    name: 'นายสมชาย ใจดี',
    email: 'somchai.jaidee@email.com',
    phone: '081-234-5678',
    location: 'กรุงเทพมหานคร',
    joinDate: '15 ธันวาคม 2024',
    avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
    completedJobs: 12,
    rating: 4.8,
    certificates: 10,
  };

  const jobApplications = [
    {
      id: 1,
      title: 'พนักงานทำความสะอาด',
      company: 'บริษัท สะอาดใส จำกัด',
      status: 'รอการตอบรับ',
      appliedDate: '20 มกราคม 2025',
      statusColor: 'yellow',
    },
    {
      id: 2,
      title: 'คนส่งอาหาร',
      company: 'ร้านอาหารอร่อยมาก',
      status: 'ได้รับการตอบรับ',
      appliedDate: '18 มกราคม 2025',
      statusColor: 'green',
    },
    {
      id: 3,
      title: 'ผู้ช่วยช่างซ่อม',
      company: 'บริษัท ซ่อมเก่ง จำกัด',
      status: 'ไม่ผ่านการคัดเลือก',
      appliedDate: '15 มกราคม 2025',
      statusColor: 'red',
    },
  ];

  const verifiedJobs = [
    {
      id: 1,
      jobTitle: 'พนักงานทำความสะอาด',
      company: 'บริษัท สะอาดใส จำกัด',
      completedDate: '15 มกราคม 2025',
      duration: '7 วัน',
      rating: 5,
      certificate: 'cert_001.pdf',
      feedback: 'ทำงานขยัน ตรงเวลา ทำความสะอาดได้อย่างละเอียด',
      verified: true,
    },
    {
      id: 2,
      jobTitle: 'คนส่งอาหาร',
      company: 'ร้านอาหารอร่อยมาก',
      completedDate: '12 มกราคม 2025',
      duration: '14 วัน',
      rating: 5,
      certificate: 'cert_002.pdf',
      feedback: 'ส่งอาหารรวดเร็ว มีความรับผิดชอบสูง ลูกค้าประทับใจ',
      verified: true,
    },
    {
      id: 3,
      jobTitle: 'แม่บ้าน',
      company: 'บ้านคุณสมศรี',
      completedDate: '8 มกราคม 2025',
      duration: '30 วัน',
      rating: 4,
      certificate: 'cert_003.pdf',
      feedback: 'ซื่อสัตย์ ทำงานดี แต่ควรพัฒนาทักษะการทำอาหารเพิ่มเติม',
      verified: true,
    },
    {
      id: 4,
      jobTitle: 'พนักงานร้านกาแฟ',
      company: 'Coffee Corner',
      completedDate: '5 มกราคม 2025',
      duration: '21 วัน',
      rating: 5,
      certificate: 'cert_004.pdf',
      feedback: 'บุคลิกดี ยิ้มแย้ม ลูกค้าชื่นชอบ ทำงานเป็นทีมได้ดี',
      verified: true,
    },
    {
      id: 5,
      jobTitle: 'คนขายของ',
      company: 'ตลาดนัดสวนจตุจักร',
      completedDate: '2 มกราคม 2025',
      duration: '5 วัน',
      rating: 4,
      certificate: 'cert_005.pdf',
      feedback: 'พูดเก่ง ขายของได้ดี อดทนต่อสภาพอากาศ',
      verified: true,
    },
  ];

  const notifications = [
    {
      id: 1,
      title: 'งานใหม่ที่เหมาะกับคุณ',
      message: 'พบงาน "แม่บ้าน" ใกล้บ้านคุณ',
      time: '2 ชั่วโมงที่แล้ว',
      read: false,
    },
    {
      id: 2,
      title: 'ผลการสมัครงาน',
      message: 'คุณได้รับการตอบรับสำหรับตำแหน่ง "คนส่งอาหาร"',
      time: '1 วันที่แล้ว',
      read: true,
    },
    {
      id: 3,
      title: 'ใบรับรองพร้อมแล้ว',
      message: 'ใบรับรองงาน "พนักงานทำความสะอาด" พร้อมดาวน์โหลด',
      time: '3 วันที่แล้ว',
      read: true,
    },
  ];

  const getStatusBadge = (status: string, color: string) => {
    const colorClasses = {
      yellow: 'bg-yellow-100 text-yellow-800',
      green: 'bg-green-100 text-green-800',
      red: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colorClasses[color as keyof typeof colorClasses]}`}>
        {status}
      </span>
    );
  };

  const tabs = [
    { id: 'profile', name: 'โปรไฟล์', icon: User },
    { id: 'applications', name: 'การสมัครงาน', icon: Briefcase },
    { id: 'certificates', name: 'ใบรับรอง', icon: Award },
    { id: 'notifications', name: 'การแจ้งเตือน', icon: Bell },
    { id: 'settings', name: 'การตั้งค่า', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="relative">
              <img
                src={userProfile.avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-primary-200"
              />
              <button className="absolute bottom-0 right-0 p-2 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-200">
                <Edit className="h-4 w-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{userProfile.name}</h1>
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 text-gray-600">
                <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                  <Mail className="h-4 w-4 mr-2" />
                  {userProfile.email}
                </div>
                <div className="flex items-center justify-center md:justify-start mb-2 md:mb-0">
                  <Phone className="h-4 w-4 mr-2" />
                  {userProfile.phone}
                </div>
                <div className="flex items-center justify-center md:justify-start">
                  <MapPin className="h-4 w-4 mr-2" />
                  {userProfile.location}
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary-600">{userProfile.completedJobs}</div>
                <div className="text-sm text-gray-600">งานที่เสร็จ</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">{userProfile.rating}</div>
                <div className="text-sm text-gray-600">คะแนนเฉลี่ย</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary-600">{userProfile.certificates}</div>
                <div className="text-sm text-gray-600">ใบรับรอง</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-lg p-4">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors duration-200 ${
                      activeTab === tab.id
                        ? 'bg-primary-50 text-primary-700 border-r-2 border-primary-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="h-5 w-5 mr-3" />
                    {tab.name}
                    {tab.id === 'certificates' && (
                      <span className="ml-auto bg-primary-500 text-white text-xs px-2 py-1 rounded-full">
                        {verifiedJobs.length}
                      </span>
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-lg p-6">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">ข้อมูลส่วนตัว</h2>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ชื่อ-นามสกุล
                        </label>
                        <input
                          type="text"
                          value={userProfile.name}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          อีเมล
                        </label>
                        <input
                          type="email"
                          value={userProfile.email}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          เบอร์โทรศัพท์
                        </label>
                        <input
                          type="tel"
                          value={userProfile.phone}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          ที่อยู่
                        </label>
                        <input
                          type="text"
                          value={userProfile.location}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        เกี่ยวกับฉัน
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="เล่าเกี่ยวกับตัวคุณ ทักษะ และประสบการณ์..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200"
                    >
                      บันทึกการเปลี่ยนแปลง
                    </button>
                  </form>
                </div>
              )}

              {/* Applications Tab */}
              {activeTab === 'applications' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">ประวัติการสมัครงาน</h2>
                  <div className="space-y-4">
                    {jobApplications.map((application) => (
                      <div
                        key={application.id}
                        className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {application.title}
                            </h3>
                            <p className="text-gray-600 mb-2">{application.company}</p>
                            <p className="text-sm text-gray-500">
                              สมัครเมื่อ: {application.appliedDate}
                            </p>
                          </div>
                          <div className="mt-4 md:mt-0">
                            {getStatusBadge(application.status, application.statusColor)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Certificates Tab */}
              {activeTab === 'certificates' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">ใบรับรองของฉัน</h2>
                    <div className="text-sm text-gray-600">
                      ทั้งหมด {verifiedJobs.length} ใบรับรอง
                    </div>
                  </div>

                  {/* Summary Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-primary-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-primary-600">{verifiedJobs.length}</div>
                      <div className="text-sm text-primary-700">ใบรับรองทั้งหมด</div>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {(verifiedJobs.reduce((sum, job) => sum + job.rating, 0) / verifiedJobs.length).toFixed(1)}
                      </div>
                      <div className="text-sm text-green-700">คะแนนเฉลี่ย</div>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {verifiedJobs.reduce((sum, job) => sum + parseInt(job.duration), 0)}
                      </div>
                      <div className="text-sm text-blue-700">วันทำงานรวม</div>
                    </div>
                    <div className="bg-yellow-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-yellow-600">
                        {verifiedJobs.filter(job => job.rating === 5).length}
                      </div>
                      <div className="text-sm text-yellow-700">งาน 5 ดาว</div>
                    </div>
                  </div>

                  {/* Verified Jobs List */}
                  <div className="space-y-6">
                    {verifiedJobs.map((job) => (
                      <div
                        key={job.id}
                        className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                      >
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            {/* Job Header */}
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2 flex items-center">
                                  {job.jobTitle}
                                  {job.verified && (
                                    <span className="ml-2 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                      <CheckCircle className="h-3 w-3 mr-1" />
                                      รับรองแล้ว
                                    </span>
                                  )}
                                </h3>
                                <div className="flex items-center text-gray-600 mb-2">
                                  <Building className="h-4 w-4 mr-2" />
                                  <span>{job.company}</span>
                                </div>
                              </div>
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`h-5 w-5 ${
                                      i < job.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                                    }`}
                                  />
                                ))}
                                <span className="ml-2 text-sm text-gray-600">({job.rating}/5)</span>
                              </div>
                            </div>

                            {/* Job Details */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                                เสร็จสิ้นเมื่อ: {job.completedDate}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <TrendingUp className="h-4 w-4 mr-2 text-gray-400" />
                                ระยะเวลา: {job.duration}
                              </div>
                            </div>

                            {/* Feedback */}
                            <div className="mb-4">
                              <h4 className="text-sm font-medium text-gray-900 mb-2">ความคิดเห็นจากนายจ้าง:</h4>
                              <p className="text-gray-700 bg-gray-50 p-3 rounded-lg italic">
                                "{job.feedback}"
                              </p>
                            </div>

                            {/* Certificate Section */}
                            <div className="bg-primary-50 rounded-lg p-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                  <Award className="h-5 w-5 text-primary-600 mr-2" />
                                  <div>
                                    <div className="text-sm font-medium text-primary-900">
                                      ใบรับรองการทำงาน
                                    </div>
                                    <div className="text-xs text-primary-700">
                                      {job.certificate}
                                    </div>
                                  </div>
                                </div>
                                <button className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200 text-sm">
                                  <Download className="h-4 w-4 mr-2" />
                                  ดาวน์โหลด
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Certificate Benefits */}
                  <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
                    <div className="text-center">
                      <Award className="h-10 w-10 mx-auto mb-3" />
                      <h3 className="text-lg font-bold mb-3">ประโยชน์ของใบรับรอง</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <CheckCircle className="h-6 w-6 mx-auto mb-2 opacity-80" />
                          <p className="opacity-90">พิสูจน์ประสบการณ์การทำงาน</p>
                        </div>
                        <div className="text-center">
                          <Star className="h-6 w-6 mx-auto mb-2 opacity-80" />
                          <p className="opacity-90">เพิ่มความน่าเชื่อถือ</p>
                        </div>
                        <div className="text-center">
                          <TrendingUp className="h-6 w-6 mx-auto mb-2 opacity-80" />
                          <p className="opacity-90">โอกาสงานดีขึ้น</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Notifications Tab */}
              {activeTab === 'notifications' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">การแจ้งเตือน</h2>
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div
                        key={notification.id}
                        className={`border rounded-lg p-4 ${
                          notification.read ? 'border-gray-200 bg-white' : 'border-primary-200 bg-primary-50'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className={`font-semibold mb-1 ${notification.read ? 'text-gray-900' : 'text-primary-900'}`}>
                              {notification.title}
                            </h3>
                            <p className="text-gray-700 mb-2">{notification.message}</p>
                            <p className="text-sm text-gray-500">{notification.time}</p>
                          </div>
                          {!notification.read && (
                            <div className="w-3 h-3 bg-primary-500 rounded-full ml-4 mt-1"></div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">การตั้งค่า</h2>
                  <div className="space-y-6">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">การแจ้งเตือน</h3>
                      <div className="space-y-3">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span className="text-gray-700">แจ้งเตือนงานใหม่</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" defaultChecked />
                          <span className="text-gray-700">แจ้งเตือนผลการสมัครงาน</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-3" />
                          <span className="text-gray-700">แจ้งเตือนข่าวสารจากระบบ</span>
                        </label>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-4">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">ความปลอดภัย</h3>
                      <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 mr-4">
                        เปลี่ยนรหัสผ่าน
                      </button>
                      <button className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors duration-200">
                        ลบบัญชี
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;