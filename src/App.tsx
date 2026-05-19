/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  Bell,
  Globe,
  RotateCw,
  Receipt,
  Tag,
  Lock,
  Building2,
  Zap,
  Shield,
  Download,
  MessageSquareText,
  Phone,
  PhoneCall,
  CheckCircle2,
  Check,
  FileText,
  CalendarCheck,
  Calendar,
  Hash,
  Landmark,
  Mail,
  ChevronDown,
  User,
  Apple,
  CreditCard,
  Building
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f3f7f9] font-sans pb-10" dir="rtl">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 w-full sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 h-18 flex flex-row justify-between items-center">
          {/* Right Profile (Start of RTL) */}
          <div className="flex flex-row items-center gap-4">
            <button className="relative flex items-center justify-center cursor-pointer p-2 hover:bg-gray-50 rounded-full transition-colors group">
              <Bell className="w-5 h-5 text-gray-800" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="flex flex-col items-start gap-0.5">
              <div className="flex items-center gap-1">
                <span className="text-[15px] text-gray-800 font-medium">مرحباً</span>
                <span className="text-[15px] text-gray-800 font-bold">Amin Basil</span>
              </div>
              <span className="text-[13px] text-gray-500 font-medium">
                نمنحك عروضاً مميزة تناسب احتياجاتك التأمينية.
              </span>
            </div>
          </div>

          {/* Left Buttons (End of RTL) */}
          <div className="flex items-center gap-3">
            <button className="bg-white text-[#6600da] border border-[#6600da] px-6 py-2 rounded-lg text-[14px] font-bold cursor-pointer hover:bg-[#6600da] hover:text-white transition-all duration-200 shadow-sm">
              اشتري الآن
            </button>
            <div className="flex items-center gap-2 text-gray-700 text-[14px] font-bold cursor-pointer px-4 py-2 rounded-lg border border-gray-200 bg-white hover:bg-gray-50 transition-colors">
              <Globe className="w-4 h-4" />
              <span>EN</span>
            </div>
          </div>
        </div>
      </header>

      {/* Progress Stepper */}
      <section className="bg-white border-b border-gray-100 w-full shadow-sm overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex flex-row justify-between items-center">
          {[
            { id: 1, text: 'البيانات الشخصية', status: 'completed' },
            { id: 2, text: 'بيانات التأمين', status: 'completed' },
            { id: 3, text: 'اختيار العرض', status: 'completed' },
            { id: 4, text: 'تفاصيل الدفع', status: 'active' },
          ].map((step) => (
            <div
              key={step.id}
              className={`flex flex-row items-center gap-3 py-4.5 relative min-w-fit px-2 ${step.status === 'active' ? 'after:content-[""] after:absolute after:bottom-[-1px] after:left-0 after:right-0 after:h-0.75 after:bg-[#6600da] after:rounded-t-full' : ''}`}
            >
              <div
                className={`flex items-center justify-center w-6 h-6 rounded-full text-[13px] font-bold transition-colors ${
                  step.status === 'completed'
                    ? 'bg-[#0066ec] text-white'
                    : step.status === 'active'
                    ? 'bg-[#6600da] text-white'
                    : 'bg-gray-100 text-gray-400'
                }`}
              >
                {step.id}
              </div>
              <span
                className={`text-[15px] font-bold tracking-tight transition-colors ${
                   step.status === 'completed'
                    ? 'text-[#0066ec]'
                    : step.status === 'active'
                    ? 'text-gray-950'
                    : 'text-gray-400'
                }`}
              >
                {step.text}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] xl:grid-cols-[360px_1fr] gap-8 items-start">
          
          {/* Price Summary Sidebar (RIGHT SIDE) */}
          <aside className="w-full flex flex-col gap-6 order-last lg:order-first">
            {/* Price Summary Card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[16px] p-0 shadow-[0_2px_15px_rgba(0,0,0,0.04)] border border-blue-50 overflow-hidden"
            >
              <div className="p-5 pb-6">
                <div className="flex flex-row items-center justify-center gap-2 mb-5 pb-5 border-b border-gray-100">
                  <Receipt className="w-5 h-5 text-[#1d3bb2]" strokeWidth={2.5} />
                  <span className="text-[17px] font-[900] text-[#1d3bb2]">ملخص السعر</span>
                </div>

                <div className="flex flex-col gap-0 w-full mb-6">
                  <div className="flex flex-row justify-between items-center text-gray-800 pb-3 border-b border-gray-100/80 w-full">
                    <span className="text-[15px] font-[800]">سعر الوثيقة</span>
                    <span className="text-[15px] font-[900] tracking-wide" dir="ltr">1,743.07 <span className="text-[14px]">﷼</span></span>
                  </div>
                  <div className="flex flex-row justify-between items-center text-red-500 pb-3 border-b border-gray-100/80 w-full mt-3">
                    <span className="text-[14px] font-[800] text-gray-500">خصم عدم وجود مطالبات</span>
                    <span className="text-[14px] font-[900] tracking-wide" dir="ltr">- 592.77 <span className="text-[11px] font-bold">﷼</span></span>
                  </div>
                  <div className="flex flex-row justify-between items-center text-gray-900 pb-3 border-b border-gray-100/80 w-full mt-3">
                    <span className="text-[15px] font-[800]">المجموع الجزئي</span>
                    <span className="text-[15px] font-[900] tracking-wide" dir="ltr">1,170.31 <span className="text-[14px]">﷼</span></span>
                  </div>
                  <div className="flex flex-row justify-between items-center text-gray-500 pb-3 w-full mt-3">
                    <span className="text-[13px] font-[800]">ضريبة القيمة المضافة (15%)</span>
                    <span className="text-[13px] font-[900] tracking-wide" dir="ltr">+ 150.04 <span className="text-[11px] font-bold opacity-80">﷼</span></span>
                  </div>
                  <div className="w-full border-b-[2px] border-dashed border-[#8eb4f9] opacity-50 mb-1 mt-1"></div>
                </div>

                <div className="flex flex-row justify-center items-center gap-1.5 mb-5 pt-1 text-center">
                  <span className="text-[36px] font-[900] text-[#1d3bb2] tracking-tighter" dir="ltr"><span className="text-[20px] font-bold">﷼</span> 1,000.26 </span>
                </div>

                <div className="flex flex-row items-center justify-between px-5 py-3 bg-[#f2fcf6] border border-[#d1f4e0] rounded-xl mb-6 shadow-sm w-full h-[64px]">
                  <div className="flex flex-col items-end gap-0.5 justify-center flex-1">
                    <span className="text-[13px] text-emerald-800 font-[800]">وفرت</span>
                    <span className="text-[14px] font-[900] text-emerald-800 tracking-wide" dir="ltr"><span className="text-[11px] font-bold">﷼</span> 592.77</span>
                  </div>
                  <div className="flex items-center justify-start shrink-0 mr-4">
                    <Tag className="w-[20px] h-[20px] text-emerald-600 transform scale-x-[-1]" strokeWidth={2} />
                  </div>
                </div>

                <div className="flex flex-row justify-center items-stretch pt-4 border-t border-gray-100/80 mb-6 gap-0">
                  {[
                    { icon: Lock, t: 'تشفير\nكاملة' },
                    { icon: Building2, t: 'شركات\nمرخصة' },
                    { icon: Zap, t: 'وثيقة\nفورية' },
                    { icon: Shield, t: 'دفع آمن\n100%' },
                  ].map((item, idx) => (
                    <React.Fragment key={idx}>
                      <div className="flex flex-col items-center justify-start flex-1 group">
                        <div className="flex items-center justify-center w-[36px] h-[36px] mb-2">
                          <item.icon className="w-5 h-5 text-[#1d3bb2]" strokeWidth={2} />
                        </div>
                        <span className="text-[11px] text-gray-700 text-center font-[800] leading-snug whitespace-pre-line group-hover:text-[#1d3bb2] transition-colors">
                          {item.t}
                        </span>
                      </div>
                      {idx === 1 && (
                         <div className="w-[1px] bg-gray-200 h-10 my-auto self-center mx-1 rounded-full"></div>
                      )}
                    </React.Fragment>
                  ))}
                </div>

                <button className="relative w-full h-[64px] bg-gradient-to-r from-[#2005a7] to-[#4510d9] rounded-[14px] flex flex-row items-center justify-between transition-all hover:opacity-95 shadow-[0_4px_15px_rgba(32,5,167,0.2)] cursor-pointer overflow-hidden group">
                  {/* Right side (Text) */}
                  <div className="flex-1 flex flex-col items-center justify-center leading-tight pt-1 pr-4">
                    <span className="text-[13px] text-white/90 font-[800] mb-0.5">ادفع الآن</span>
                    <span className="text-[18px] text-white font-[900] tracking-wide flex items-center gap-1" dir="ltr">1,000.26 <span className="text-[13px] font-bold">﷼</span></span>
                  </div>
                  
                  {/* Separator */}
                  <div className="w-[1.5px] h-[36px] bg-white/20 rounded-full"></div>
                  
                  {/* Left side (Icon) */}
                  <div className="w-[64px] h-full flex items-center justify-center shrink-0">
                    <Lock className="w-[18px] h-[18px] text-white/90" strokeWidth={2.5} />
                  </div>
                </button>

                <div className="text-center mt-4 px-1">
                  <p className="text-[11px] text-gray-500 leading-relaxed font-medium">
                     بالضغط على ادفع الآن فإنك توافق على <a href="#" className="text-[#1d3bb2] border-b border-[#1d3bb2] font-bold">الشروط والأحكام</a>
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Support Card Area */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white rounded-[24px] p-6 shadow-[0_8px_30px_rgb(0,0,0,0.01)] border border-gray-100"
            >
              <div className="text-center mb-5">
                <h5 className="text-[14px] font-bold text-gray-900">تحتاج مساعدة؟</h5>
                <p className="text-[12px] text-gray-400 mt-1 font-medium">فريق الدعم متاح لخدمتك 24/7</p>
              </div>
              <div className="flex flex-row justify-center gap-5">
                <div className="flex flex-col items-center gap-2 group cursor-pointer text-center">
                   <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all shadow-sm">
                    <PhoneCall className="w-5 h-5 text-[#22c55e]" />
                  </div>
                   <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-900">واتساب</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white group-hover:bg-blue-50 group-hover:border-blue-200 transition-all shadow-sm">
                    <Phone className="w-5 h-5 text-gray-500" />
                  </div>
                  <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-900">اتصال</span>
                </div>
                <div className="flex flex-col items-center gap-2 group cursor-pointer">
                  <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white group-hover:bg-emerald-50 group-hover:border-emerald-200 transition-all shadow-sm">
                    <MessageSquareText className="w-5 h-5 text-[#22c55e]" />
                  </div>
                   <span className="text-[11px] font-bold text-gray-400 group-hover:text-gray-900">الدردشة المباشرة</span>
                </div>
              </div>
            </motion.div>
          </aside>

          {/* Main Content Area (LEFT SIDE) */}
          <div className="flex flex-col gap-6 w-full min-w-0 order-first lg:order-last">
            
            {/* Success Header (Centered) */}
            <div className="flex flex-row items-center justify-center gap-5 py-6 mb-2">
               <div className="flex flex-col items-center justify-center text-center gap-2">
                 <h1 className="text-[26px] font-[900] tracking-tight text-gray-900">في خطوة واحدة تفصلك عن وثيقتك!</h1>
                 <p className="text-[16px] text-gray-500 font-medium">راجع بياناتك وأكمل عملية الدفع بأمان.</p>
              </div>
              <div className="shrink-0 group cursor-pointer">
                <div className="w-14 h-14 bg-[#22c55e] rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(34,197,94,0.3)] transition-transform group-hover:scale-110">
                  <CheckCircle2 className="w-[28px] h-[28px] text-white" strokeWidth={3} />
                </div>
              </div>
            </div>

            {/* Document Details Section */}
            <div className="bg-white rounded-[24px] border border-gray-100 p-6 lg:p-8 shadow-sm w-full" dir="rtl">
              <div className="flex flex-row items-center justify-start gap-2 mb-6">
                <div className="flex items-center justify-center p-1 rounded-[8px] bg-transparent">
                  <FileText className="w-[22px] h-[22px] text-[#1d3bb2]" strokeWidth={2.5} />
                </div>
                <span className="text-[18px] font-[800] text-black">تفاصيل الوثيقة</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {[
                  { icon: FileText, label: 'نوع التأمين', value: 'ضد الغير' },
                  { icon: CalendarCheck, label: 'تاريخ بداية الوثيقة', value: '17/12/2025' },
                  { icon: Calendar, label: 'تاريخ انتهاء الوثيقة', value: '16/12/2026' },
                  { icon: FileText, label: 'الرقم المرجعي للتسعيرة', value: '525000038167405' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-transparent px-4 py-5 rounded-[12px] border border-gray-100 flex flex-row items-center justify-start gap-3 min-h-[88px] hover:border-gray-200 hover:bg-gray-50/50 transition-colors">
                    <div className="shrink-0 flex items-center justify-center border border-gray-300 p-2 rounded-[8px]">
                       <item.icon className="w-[20px] h-[20px] text-[#4a5f78]" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <span className="text-[13.5px] text-gray-500 font-[800] whitespace-nowrap mb-1">{item.label}</span>
                      <span className="text-[15px] font-[900] text-gray-900">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Info Card */}
            <div className="flex flex-col gap-8 w-full mt-4 bg-white rounded-[24px] border border-gray-100 p-6 lg:p-8 shadow-sm">
              
              {/* IBAN Section */}
              <div className="flex flex-col items-end w-full">
                 <h3 className="text-[18px] font-[800] text-black mb-2">رقم الحساب البنكي (الآيبان)</h3>
                 <p className="text-[14px] text-gray-400 text-right mb-5">
                   يرجى إدخال رقم الحساب المصرفي الدولي (IBAN) الخاص بك الخاص لاسترداد أي مبالغ عالقة عند وجود سحب أو دفع.
                 </p>
                 <div className="w-full flex items-center justify-between h-[54px] border border-gray-200 rounded-[12px] px-6 bg-white shadow-sm transition-all hover:border-gray-300">
                   <div className="shrink-0">
                     <CheckCircle2 className="w-[20px] h-[20px] text-[#22c55e]" strokeWidth={2.5} />
                   </div>
                   <div className="flex-1 text-right pr-4 font-mono tracking-widest text-[16px] font-bold text-gray-900" dir="ltr">
                     SA1234567890123456789012
                   </div>
                   <div className="shrink-0">
                     <Landmark className="w-[20px] h-[20px] text-[#4a65d0]" strokeWidth={2.5} />
                   </div>
                 </div>
                 <p className="text-[13px] text-gray-400 mt-3 font-medium text-right w-full">نستخدم هذا الحساب فقط لاسترداد المبالغ المتعلقة بخدمات ما بعد البيع.</p>
              </div>

               {/* Contact Fields */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full mt-2">
                 {/* Mobile (Right in UI -> First in DOM RTL) */}
                 <div className="flex flex-col items-end gap-2 w-full">
                   <div className="flex flex-row items-center gap-1.5 pr-2">
                     <span className="text-[15px] font-[800] text-black">رقم الجوال</span>
                     <Phone className="w-4 h-4 text-[#1d3bb2]" strokeWidth={2.5} />
                   </div>
                   <div className="w-full h-[48px] border border-gray-200 rounded-[12px] flex items-center justify-between px-4 bg-white shadow-sm">
                     <CheckCircle2 className="w-[20px] h-[20px] text-[#22c55e]" strokeWidth={2.5} />
                     <span className="text-[15px] text-gray-900 font-bold font-mono tracking-widest" dir="ltr">966562029118</span>
                   </div>
                 </div>

                 {/* Email (Left in UI -> Second in DOM RTL) */}
                 <div className="flex flex-col items-end gap-2 w-full">
                   <div className="flex flex-row items-center gap-1.5 pr-2">
                     <span className="text-[15px] font-[800] text-black">البريد الإلكتروني (لإرسال وثيقتك)</span>
                     <Mail className="w-4 h-4 text-[#1d3bb2]" strokeWidth={2.5} />
                   </div>
                   <div className="w-full h-[48px] border border-gray-200 rounded-[12px] flex items-center justify-between px-4 bg-white shadow-sm">
                     <CheckCircle2 className="w-[20px] h-[20px] text-[#22c55e]" strokeWidth={2.5} />
                     <span className="text-[15px] text-gray-900 font-bold" dir="ltr">abc@example.com</span>
                   </div>
                 </div>
               </div>

              {/* Terms and Process */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-2">
                 
                 {/* What happens next Area (First in DOM -> Renders on the RIGHT) */}
                 <div className="w-full rounded-[16px] border border-blue-50 p-6 lg:p-8 bg-white shadow-[0_2px_15px_rgba(0,0,0,0.02)] mt-8">
                   <h4 className="text-[16px] font-[800] text-[#1d3bb2] mb-6 text-right flex items-center justify-end gap-2">ماذا سيحدث بعد الدفع؟</h4>
                   <div className="flex flex-col gap-6">
                     {[
                       { icon: Zap, t: 'إصدار الوثيقة فورياً', d: 'يتم إصدار وثيقتك بعد إتمام الدفع مباشرة' },
                       { icon: Mail, t: 'إرسال الوثيقة عبر الإيميل والرسائل', d: 'ستصلك النسخة الرسمية على بريدك المسجل' },
                       { icon: Download, t: 'تحميل الوثيقة بصيغة PDF', d: 'يمكنك تحميلها في أي وقت من حسابك' },
                       { icon: User, t: 'إضافتها في حسابك', d: 'ستجد الوثيقة في قسم وثائقي' },
                     ].map((step, idx) => (
                       <div key={idx} className="flex flex-row items-center gap-4 text-right group">
                         <div className="w-[36px] h-[36px] shrink-0 flex items-center justify-center bg-transparent group-hover:bg-[#f4f7fe] rounded-lg transition-colors">
                           <step.icon className="w-[20px] h-[20px] text-[#4a65d0]" strokeWidth={2} />
                         </div>
                         <div className="flex flex-col gap-1 flex-1 items-start">
                           <span className="text-[14px] text-gray-800 font-bold leading-none">{step.t}</span>
                           <span className="text-[12px] text-gray-400 leading-tight">{step.d}</span>
                         </div>
                       </div>
                     ))}
                   </div>
                 </div>

                 {/* Checkboxes Area (Second in DOM -> Renders on the LEFT) */}
                 <div className="flex flex-col items-end gap-4 pt-12">
                   {[
                     'أقر وأوافق على صحة جميع البيانات المدخلة.',
                     'أوافق على الشروط والأحكام من شركة التأمين.',
                     'أوافق على سياسة الخصوصية.',
                     'أعلم أن الوثيقة لا تسري إلا بعد إتمام عملية الدفع.'
                   ].map((text, i) => (
                     <label key={i} className="flex flex-row items-center gap-3 cursor-pointer group">
                       <div className="w-[20px] h-[20px] shrink-0 min-w-[20px] border-[1.5px] border-[#6600da] rounded-[4px] flex items-center justify-center bg-transparent transition-all shadow-sm">
                         <Check className="w-3.5 h-3.5 text-[#6600da]" strokeWidth={3.5} />
                       </div>
                       <span className="text-[14px] text-gray-700 font-[800] group-hover:text-gray-900 transition-colors">
                         {text.includes('الأحكام') || text.includes('الخصوصية') ? (
                           <>
                             {text.split('ال')[0]} <a href="#" className="font-[900] text-[#1d3bb2] hover:underline">ال{text.split('ال')[1]}</a>
                           </>
                         ) : text}
                       </span>
                     </label>
                   ))}
                   <div className="flex justify-start mt-4 pr-1">
                     <a href="#" className="text-[#1d3bb2] text-[14px] font-bold flex items-center gap-1.5 hover:translate-x-[-4px] transition-transform">
                       <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
                       <span>عرض الشروط والأحكام كاملة</span>
                     </a>
                   </div>
                 </div>
               </div>
            </div>

            {/* Payment Methods Section */}
            <div className="w-full mt-4 bg-white rounded-[24px] border border-gray-100 p-8 shadow-[0_4px_25px_rgba(0,0,0,0.02)]">
              <div className="flex items-center justify-center gap-2 mb-6 border-b border-gray-50 pb-4 mx-4">
                <span className="text-[16px] font-[800] text-gray-800">وسائل الدفع المتاحة</span>
              </div>
              <div className="flex flex-row flex-wrap items-center justify-center gap-3 overflow-x-auto pb-2">
                {[
                  { name: 'تحويل بنكي', color: 'text-gray-700 font-bold text-[13px]', type: 'bank' },
                  { name: 'stc pay', color: 'text-[#4f46e5]', type: 'stc' },
                  { name: 'Apple Pay', color: 'text-black', type: 'apple' },
                  { name: 'mastercard', color: 'text-gray-800', type: 'mastercard' },
                  { name: 'VISA', color: 'text-[#1a1f71]', type: 'text', italic: true },
                  { name: 'مدى', sub: 'mada', color: 'text-[#00a4e4]', subColor: 'text-[#004990]', type: 'text' },
                ].map((pm, idx) => (
                  <div key={idx} className="bg-white border border-gray-100 rounded-[10px] px-4 py-2 flex flex-col items-center justify-center gap-1 min-h-[46px] min-w-[100px] shadow-sm hover:border-[#2563eb] hover:shadow-md transition-all cursor-pointer leading-none px-4">
                    {pm.type === 'text' && pm.sub && (
                       <div className="flex items-center gap-2">
                         <span className={`${pm.color} font-bold text-[14px]`}>{pm.name}</span>
                         <span className={`${pm.subColor} font-bold text-[11px]`}>| {pm.sub}</span>
                       </div>
                    )}
                    {pm.type === 'text' && pm.italic && (
                      <span className={`${pm.color} font-[900] text-[20px] italic tracking-tighter`}>{pm.name}</span>
                    )}
                    {pm.type === 'mastercard' && (
                        <div className="flex items-center justify-center relative w-8 h-5 shrink-0">
                            <div className="absolute left-0 w-4 h-4 rounded-full bg-[#eb001b]"></div>
                            <div className="absolute right-0 w-4 h-4 rounded-full bg-[#f79e1b] opacity-85"></div>
                        </div>
                    )}
                    {pm.type === 'apple' && (
                        <div className="flex items-center justify-center gap-1">
                            <Apple className="w-5 h-5 text-black fill-black" />
                            <span className="text-black font-[900] text-[16px]">Pay</span>
                        </div>
                    )}
                    {pm.type === 'stc' && (
                        <div className="flex items-center justify-center gap-0.5">
                            <span className="text-[#4f46e5] font-[900] text-[15px]">stc</span>
                            <span className="text-[#22c55e] font-[900] text-[15px]">pay</span>
                        </div>
                    )}
                    {pm.type === 'bank' && (
                       <div className="flex items-center gap-2">
                         <Landmark className="w-4 h-4 text-gray-500" />
                         <span className={pm.color}>{pm.name}</span>
                       </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 mt-8 px-2 opacity-80">
                 <span className="text-[13px] text-gray-400 font-[800]">جميع عمليات الدفع مشفرة وآمنة 100%</span>
                 <Lock className="w-4 h-4 text-gray-300" strokeWidth={2.5} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
