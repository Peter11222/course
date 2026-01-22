import { createBrowserRouter } from 'react-router-dom'
import Home from '@/views/home'
import App from '@/App'
import CourseManage from '@/views/teach/course-manage'
import StudentManage from '@/views/teach/student-manage'
import EnrollCourseManage from '@/views/teach/enroll-course-manage'
import GradeManage from '@/views/teach/grade-manage'
import TeacherManage from '@/views/teach/teacher-manage'
import AttendManage from '@/views/teach/attend-manage'
import RenewalReminder from '@/views/teach/renewal-reminder'
import ChangeClassManage from '@/views/teach/change-class-manage'
import QuitClassManage from '@/views/teach/quit-class-manage'
import SupplementalCheckInManage from '@/views/teach/supplemental-check-in-manage'
import StopCourseManage from '@/views/teach/stop-course-manage'
import StudentLeaveManage from '@/views/teach/student-leave-manage'
import TeacherLeaveSubstituteManage from '@/views/teach/teacher-leave-substitute-manage'
import OfflineCourseManage from '@/views/course/offline-course-manage'
import OnlineCourseManage from '@/views/course/online-course-manage'
import OnlineCourseTrash from '@/views/course/online-course-trash'
import ProductOrderManage from '@/views/order/product-order-manage'
import OnlineCourseOrderManage from '@/views/order/online-course-order-manage'
import OfflineCourseOrderManage from '@/views/order/offline-course-order-manage'
import ActivityList from '@/views/activity/activity-list'
import NewActivity from '@/views/activity/new-activity'
import ActivityTrash from '@/views/activity/activity-trash'
import ActivityCourseManage from '@/views/activity/activity-course-manage'
import ActivityVideoManage from '@/views/activity/activity-video-manage'
import ActivityPhotoManage from '@/views/activity/activity-photo-manage'
import TeamManage from '@/views/team/team-manage'
import CommissionManage from '@/views/team/commission-manage'
import ProductList from '@/views/product/product-list'
import New from '@/views/product/new'
import ProductTrash from '@/views/product/product-trash'
import OrganizeManage from '@/views/organize/organize-manage'
import OrganizeOnboardManage from '@/views/organize/organize-onboard-manage'
import OrganizeTrash from '@/views/organize/organize-trash'
import CourseClassifyManage from '@/views/basic/course-classify-manage'
import ClassroomManage from '@/views/basic/classroom-manage'
import PackageManage from '@/views/basic/package-manage'
import PayrollMethodManage from '@/views/basic/payroll-method-manage'
import CouponManage from '@/views/basic/coupon-manage'
import ComplaintListManage from '@/views/basic/complaint-list-manage'
import QuestionnaireManage from '@/views/basic/questionnaire-manage'
import ConsultantManage from '@/views/basic/consultant-manage'
import SubmissionCategoryManage from '@/views/basic/submission-category-manage'
import CarouselManage from '@/views/basic/carousel-manage'
import NewsInformation from '@/views/basic/news-information'
import OfficialAccountManage from '@/views/basic/official-account-manage'
import RolePermission from '@/views/compose/role-permission'
import MenuManage from '@/views/compose/menu-manage'
import EmployeeManage from '@/views/compose/employee-manage'
import UserManage from '@/views/compose/user-manage'
import AccountSet from '@/views/compose/account-set'
import OperateLog from '@/views/compose/operate-log'
import AboutUs from '@/views/compose/about-us'
import MessageNotification from '@/views/compose/message-notification'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />, // 父路由渲染你的整体布局
    children: [
      { index: true, element: <Home /> }, // 默认子路由：访问 / 时渲染首页
      {
        path: 'teach',
        children: [
          { path: 'course-manage', element: <CourseManage /> },
          { path: 'student-manage', element: <StudentManage /> },
          { path: 'enroll-course-manage', element: <EnrollCourseManage /> },
          { path: 'grade-manage', element: <GradeManage /> },
          { path: 'teacher-manage', element: <TeacherManage /> },
          { path: 'attend-manage', element: <AttendManage /> },
          { path: 'renewal-reminder', element: <RenewalReminder /> },
          { path: 'change-class-manage', element: <ChangeClassManage /> },
          { path: 'quit-class-manage', element: <QuitClassManage /> },
          {
            path: 'supplemental-check-in-manage',
            element: <SupplementalCheckInManage />
          },
          { path: 'stop-course-manage', element: <StopCourseManage /> },
          { path: 'student-leave-manage', element: <StudentLeaveManage /> },
          {
            path: 'teacher-leave-substitute-manage',
            element: <TeacherLeaveSubstituteManage />
          }
        ]
      },
      {
        path: 'course',
        children: [
          { path: 'offline-course-manage', element: <OfflineCourseManage /> },
          { path: 'online-course-manage', element: <OnlineCourseManage /> },
          { path: 'online-course-trash', element: <OnlineCourseTrash /> }
        ]
      },
      {
        path: 'order',
        children: [
          { path: 'product-order-manage', element: <ProductOrderManage /> },
          {
            path: 'online-course-order-manage',
            element: <OnlineCourseOrderManage />
          },
          {
            path: 'offline-course-order-manage',
            element: <OfflineCourseOrderManage />
          }
        ]
      },
      {
        path: 'activity',
        children: [
          { path: 'activity-list', element: <ActivityList /> },
          {
            path: 'new-activity',
            element: <NewActivity />
          },
          {
            path: 'activity-trash',
            element: <ActivityTrash />
          },
          {
            path: 'activity-course-manage',
            element: <ActivityCourseManage />
          },
          {
            path: 'activity-video-manage',
            element: <ActivityVideoManage />
          },
          {
            path: 'activity-photo-manage',
            element: <ActivityPhotoManage />
          }
        ]
      },
      {
        path: 'team',
        children: [
          { path: 'team-manage', element: <TeamManage /> },
          {
            path: 'commission-manage',
            element: <CommissionManage />
          }
        ]
      },
      {
        path: 'product',
        children: [
          { path: 'product-list', element: <ProductList /> },
          {
            path: 'new',
            element: <New />
          },
          {
            path: 'product-trash',
            element: <ProductTrash />
          }
        ]
      },
      {
        path: 'organize',
        children: [
          { path: 'organize-manage', element: <OrganizeManage /> },
          {
            path: 'organize-onboard-manage',
            element: <OrganizeOnboardManage />
          },
          {
            path: 'organize-trash',
            element: <OrganizeTrash />
          }
        ]
      },
      {
        path: 'basic',
        children: [
          { path: 'course-classify-manage', element: <CourseClassifyManage /> },
          {
            path: 'classroom-manage',
            element: <ClassroomManage />
          },
          {
            path: 'package-manage',
            element: <PackageManage />
          },
          {
            path: 'payroll-method-manage',
            element: <PayrollMethodManage />
          },
          {
            path: 'coupon-manage',
            element: <CouponManage />
          },
          {
            path: 'complaint-list-manage',
            element: <ComplaintListManage />
          },
          {
            path: 'questionnaire-manage',
            element: <QuestionnaireManage />
          },
          {
            path: 'consultant-manage',
            element: <ConsultantManage />
          },
          {
            path: 'submission-category-manage',
            element: <SubmissionCategoryManage />
          },
          {
            path: 'carousel-manage',
            element: <CarouselManage />
          },
          {
            path: 'news-information',
            element: <NewsInformation />
          },
          {
            path: 'official-account-manage',
            element: <OfficialAccountManage />
          }
        ]
      },
      {
        path: 'compose',
        children: [
          { path: 'role-permission', element: <RolePermission /> },
          {
            path: 'menu-manage',
            element: <MenuManage />
          },
          {
            path: 'employee-manage',
            element: <EmployeeManage />
          },
          {
            path: 'user-manage',
            element: <UserManage />
          },
          {
            path: 'account-set',
            element: <AccountSet />
          },
          {
            path: 'operation-log',
            element: <OperateLog />
          },
          {
            path: 'about-us',
            element: <AboutUs />
          },
          {
            path: 'message-notification',
            element: <MessageNotification />
          }
        ]
      }
    ]
  }
])

export default router
