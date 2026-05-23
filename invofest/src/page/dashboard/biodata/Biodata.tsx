export default function BiodataPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#76153C] mb-6 text-center">
          Biodata Mahasiswa
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-gray-500">Nama</p>
            <p className="text-lg font-semibold">M Faizal Faiz</p>
          </div>

          <div>
            <p className="text-gray-500">NIM</p>
            <p className="text-lg font-semibold">24090020</p>
          </div>

          <div>
            <p className="text-gray-500">Kelas</p>
            <p className="text-lg font-semibold">4A Teknik Informatika</p>
          </div>

          <div>
            <p className="text-gray-500">Universitas</p>
            <p className="text-lg font-semibold">Universitas Harkat Negeri</p>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <p className="text-lg font-semibold">faizalfaiz645@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}
