import { ImageResponse } from 'next/og';

export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#e7e9e4',
          color: '#000',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          fontSize: 16,
          fontWeight: 400,
          padding: 2,
          lineHeight: 1,
        }}
      >
        op
      </div>
    ),
    size,
  );
}
