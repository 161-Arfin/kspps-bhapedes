'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Eye, EyeOff, Lock, User, AlertCircle } from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .required('Username atau Email wajib diisi'),
  password: Yup.string()
    .min(8, 'Kata sandi minimal 6 karakter')
    .required('Kata sandi wajib diisi'),
});

export default function LoginView() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: false
    },
    validationSchema,
    onSubmit: (values) => {
      setIsLoading(true);

      // Simulasi proses login
      setTimeout(() => {
        // Simpan mock data ke localStorage
        localStorage.setItem('adminToken', 'mock-jwt-token-12345');
        localStorage.setItem('adminUser', JSON.stringify({
          username: values.username,
          role: 'admin'
        }));

        setIsLoading(false);

        // Alihkan ke Dashboard
        router.push('/admin');
      }, 1500);
    },
  });

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-6 font-sans">
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden">

        {/* Left Side - Branding */}
        <div className="hidden lg:flex flex-col justify-center bg-slate-700 px-12 text-white">
          <div className="mb-12">
            <Image
              src="/img/bhapedes.png"
              alt="KSPPS BHAPEDES"
              width={100}
              height={100}
              className="brightness-0 invert"
              priority
            />
          </div>

          <h2 className="text-2xl font-semibold leading-relaxed mb-4">
            Sistem Informasi Manajemen
          </h2>

          <p className="text-sm leading-relaxed">
            Platform pengelolaan operasional dan keuangan BMT secara
            terintegrasi, aman, dan terpercaya.
          </p>

          <div className="mt-10 text-xs text-white border-t border-white pt-6">
            ©{new Date().getFullYear()} KSPPS BHAPEDES. All rights reserved.
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center p-8 md:p-12">
          <div className="mb-8 text-center lg:text-left">
            <h3 className="text-xl font-semibold text-slate-800 mb-2">
              Login Admin
            </h3>
            <p className="text-sm text-slate-600">
              Silakan masuk menggunakan akun resmi Anda.
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-6">

            {/* Username */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Username / Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <User size={18} />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Masukkan username"
                  className={`w-full pl-10 pr-4 py-3 border rounded-md text-sm focus:outline-none focus:ring-1 transition-colors
                    ${formik.touched.username && formik.errors.username
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-blue-700 focus:border-blue-700'}`}
                />
              </div>
              {formik.touched.username && formik.errors.username && (
                <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">
                  <AlertCircle size={14} />
                  <span>{formik.errors.username}</span>
                </div>
              )}
            </div>

            {/* Password */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-700">
                  Kata Sandi
                </label>
                <Link
                  href="#"
                  className="text-xs text-blue-700 hover:underline"
                >
                  Lupa Password?
                </Link>
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                  <Lock size={18} />
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Masukkan kata sandi"
                  className={`w-full pl-10 pr-10 py-3 border rounded-md text-sm focus:outline-none focus:ring-1 transition-colors
                    ${formik.touched.password && formik.errors.password
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-blue-700 focus:border-blue-700'}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="flex items-center gap-1 mt-1.5 text-red-500 text-xs animate-in fade-in slide-in-from-top-1">
                  <AlertCircle size={14} />
                  <span>{formik.errors.password}</span>
                </div>
              )}
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                checked={formik.values.remember}
                onChange={formik.handleChange}
                className="h-4 w-4 text-blue-700 border-gray-300 rounded cursor-pointer"
              />
              <label
                htmlFor="remember"
                className="ml-2 text-sm text-gray-700 cursor-pointer select-none"
              >
                Ingat perangkat ini
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading || !formik.isValid}
              className="w-full bg-slate-700 hover:bg-slate-800 text-white text-sm font-medium py-3 rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading && <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />}
              {isLoading ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          <p className="mt-8 text-center text-xs text-gray-500">
            Kembali ke{' '}
            <Link
              href="/"
              className="text-blue-700 hover:underline"
            >
              Halaman Utama
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
