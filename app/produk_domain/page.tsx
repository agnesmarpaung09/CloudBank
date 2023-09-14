import React from 'react';

const produk_domain = () => {
  const kotakData = [
    {
      imageSrc: 'images/kotak.png', // Ganti dengan path gambar yang sesuai
      title: '.art',
      buttonText: 'Beli',
      text: 'Harga Mulai Dari',
      price: 'Rp.206.000/tahun',
    },
    {
      imageSrc: 'images/kotak.png', // Ganti dengan path gambar yang sesuai
      title: '.asia',
      buttonText: 'Beli',
      text: 'Harga Mulai Dari',
      price: 'Rp.233.500/tahun',
    },
    {
      imageSrc: 'images/kotak.png', // Ganti dengan path gambar yang sesuai
      title: '.com',
      buttonText: 'Beli',
      text: 'Harga Mulai Dari',
      price: 'Rp.154.500/tahun',
    },
    {
      imageSrc: 'images/kotak.png', // Ganti dengan path gambar yang sesuai
      title: '.photo',
      buttonText: 'Beli',
      text: 'Harga Mulai Dari',
      price: 'Rp.360.000/tahun',
    },
    {
      imageSrc: 'images/kotak.png', // Ganti dengan path gambar yang sesuai
      title: '.photo',
      buttonText: 'Beli',
      text: 'Harga Mulai Dari',
      price: 'Rp.164.500/tahun',
    },
  ];

  return (
    <div className='relative overflow-hidden'>
  <img
  src='images/BG LAYER 1.png'
  alt='Background Image'
  className='w-full'
/>
      <div className='text-center font-cabinet-grotesk relative z-10 -mt-96'>
        <h2 className='text-2xl md:text-3xl font-bold text-black  mb-3'>
          Cek dan Beli Domain
        </h2>
        <h1 className='text-3xl md:text-4xl font-bold text-black mb-3'>
          Dimulai dari sebuah nama domain murah di Batam
        </h1>
        <h3 className='text-lg md:text-xl mx-auto text-white w-[90%] md:w-[70%] xl:w-[60%] 2xl:w-[50%] mt-4 mb-8'>
          Apakah anda sedang mencari nama domain? Cek nama domain dan temukan
          domain impian anda hanya dengan satu klik!
        </h3>

        <div className='mt-6 md:mt-10 flex flex-col md:flex-row justify-center items-center'>
          <input
            type='text'
            placeholder='Cari Nama Domain...'
            className='border p-2 rounded-l-lg focus:outline-none w-full md:w-[70%] xl:w-[60%] 2xl:w-[50%] mb-2 md:mb-0 md:mr-2'
          />
          <button className='flex items-center bg-orange-500 text-white p-2 rounded-r-lg hover:bg-orange-600 focus:outline-none w-full md:w-auto'>
            <img
              src='/images/produk_domain/SEARCH.svg'
              alt='Search Icon'
              className='h-4 w-4 mx-2'
            />
            <span className=''>Cari domain</span>
          </button>
        </div>

        <div className='mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 text-center justify-center mt-8 md:mt-16'>
          {kotakData.map((item, index) => (
            <div key={index} className='h-64 w-64 relative hover:bg-white ml-3'>
              <div className='relative h-full w-full flex items-center'>
                <img
                  src={item.imageSrc}
                  alt='Kotak'
                  className='h-full w-full'
                />
                <p className='absolute top-2 left-0 w-full text-center text-gray-800 font-bold text-4xl'>
                  {item.title}
                </p>
                <p className='absolute mt-0 left-0 w-full text-center text-gray-400 text-sm'>
                  {item.text}
                </p>
                <p className='absolute mt-24 left-0 w-full text-center text-blue-700 font-bold text-sm'>
                  {item.price}
                </p>
                <button className='absolute bottom-0 mt-4 left-0 w-full bg-orange-500 text-white py-1 px-2 text-center hover:bg-blue-600 focus:outline-none'>
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className='flex flex-col md:flex-row items-center justify-center mt-8 md:mt-12'>
          <div className='relative h-96 w-72 md:w-96 mx-auto md:mx-12'>
            <img
              src='/images/produk_domain/Group 290.svg'
              alt='SVG Group 290'
              className='h-full w-full object-contain'
            />
          </div>

          <div className='md:ml-0 mt-6 md:mt-0 text-center md:text-left'>
            <h1 className='text-2xl md:text-3xl font-bold'>Fitur Kami</h1>
            <div className='my-4'>
              <p className='text-base text-left'>Harga Murah</p>
              <p className='text-xs text-justify'>
                Harga domain kami terjangkau dan bisa bersaing dengan harga yang
                murah, membuat keuntungan anda semakin besar dan semakin banyak
                pelanggan.
              </p>
            </div>
            <div className='my-4'>
              <p className='text-base text-left'>Fitur 2</p>
              <p className='text-xs text-justify'>
                Deskripsi fitur 2 disini.
              </p>
            </div>
            <div className='my-4'>
              <p className='text-base text-left'>Fitur 3</p>
              <p className='text-xs text-justify'>
                Deskripsi fitur 3 disini.
              </p>
            </div>
            <div className='my-4'>
              <p className='text-base text-left'>Fitur 4</p>
              <p className='text-xs text-justify'>
                Deskripsi fitur 4 disini.
              </p>
            </div>
          </div>
        </div>

        <h1 className='text-3xl mt-12 md:mt-20 md:text-4xl xl:text-5xl font-bold bg-gradient-to-b from-gray-400 to-white bg-clip-text text-transparent'>
          PERTANYAAN YANG SERING DITANYAKAN
        </h1>
        <h2 className='text-xl md:text-2xl xl:text-3xl font-semibold text-gray-900'>
          Pertanyaan Yang Sering Ditanyakan
        </h2>

        <div className='bg-white shadow-md p-4 mt-6 text-justify'>
          <p className='text-xs text-left text-blue-700'>
            Apa itu reseller domain?
          </p>
          <p className='text-xs'>
            Dengan reseller domain, anda bisa menjual kembali domain yang
            ditawarkan di cloudbank ke pelanggan anda, selain itu anda juga
            mendapatkan harga reseller yang lebih murah.
          </p>
          <img
            src='/images/produk_domain/kurang.svg'
            alt='SVG Icon'
            className='ml-auto -mt-4'
            style={{ width: '10px', height: '10px' }}
          />
        </div>

        <div className='bg-white shadow-md p-4 mt-6 text-justify'>
          <p className='text-xs text-left'>
            Bagaimana cara membeli VPS di cloudbank?
          </p>
          <img
            src='/images/produk_domain/tambah.svg'
            alt='SVG Icon'
            className='ml-auto -mt-4'
            style={{ width: '10px', height: '10px' }}
          />
        </div>

        <div className='bg-white shadow-md p-4 mt-6 text-justify'>
          <p className='text-xs text-left'>
            Bagaimana cara mendapatkan key credential untuk VPS?
          </p>
          <img
            src='/images/produk_domain/tambah.svg'
            alt='SVG Icon'
            className='ml-auto -mt-4'
            style={{ width: '10px', height: '10px' }}
          />
        </div>

        <div className='bg-white shadow-md p-4 mt-6 text-justify'>
          <p className='text-xs text-left'>
            Bagaimana Cara Menggunakan VPS dari Cloudbank?
          </p>
          <img
            src='/images/produk_domain/tambah.svg'
            alt='SVG Icon'
            className='ml-auto -mt-4'
            style={{ width: '10px', height: '10px' }}
          />
        </div>

        {/* <div className='relative mt-16 md:mt-32'>
          <div className='absolute left-0 md:left-auto right-0 md:right-16 top-16 md:top-0 text-white font-semibold text-2xl md:text-3xl'>
            Anda Mempunyai Pertanyaan?
          </div>
          <div className='absolute right-0 top-0 text-white font-bold text-xl md:text-2xl pt-16 md:pt-0'>
            <p>Hubungi Kami</p>
          </div>
          <img
            src='/images/produk_domain/Group 291.png'
            alt='png Group 291'
            className='mx-auto md:mr-0'
          />
        </div> */}
      </div>
    </div>
  );
};

export default produk_domain;
