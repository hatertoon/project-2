import React, { useState } from 'react';
import { User, MapPin, Phone, Mail, Edit, Settings, Bell, FileText, Briefcase, Calendar, TrendingUp, Award } from 'lucide-react';

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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">ใบรับรองของฉัน</h2>
                  <div className="text-center py-12">
                    <Award className="h-24 w-24 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      ไปดูใบรับรองทั้งหมด
                    </h3>
                    <p className="text-gray-600 mb-6">
                      คลิกที่นี่เพื่อดูใบรับรองที่คุณได้รับจากการทำงาน
                    </p>
                    <button className="px-6 py-3 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors duration-200">
                      ดูใบรับรองทั้งหมด
                    </button>
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