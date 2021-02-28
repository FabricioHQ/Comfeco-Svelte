<script lang="ts">
  export let size: number;
  export let color: string;
</script>

<svg
  width={size}
  height={size}
  viewBox="0 0 21 21"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0)">
    <path
      d="M20.165 10.8032C20.165 5.28037 15.6879 0.803223 10.165 0.803223C4.64219 0.803223 0.165039 5.28037 0.165039 10.8032C0.165039 15.7944 3.82187 19.9315 8.60254 20.6817V13.6938H6.06348V10.8032H8.60254V8.6001C8.60254 6.09385 10.0955 4.70947 12.3797 4.70947C13.4734 4.70947 14.6182 4.90479 14.6182 4.90479V7.36572H13.3572C12.115 7.36572 11.7275 8.13662 11.7275 8.92822V10.8032H14.501L14.0576 13.6938H11.7275V20.6817C16.5082 19.9315 20.165 15.7944 20.165 10.8032Z"
      fill={color}
    />
  </g>
  <defs>
    <clipPath id="clip0">
      <rect
        width={size}
        height={size}
        fill="white"
        transform="translate(0.165039 0.803223)"
      />
    </clipPath>
  </defs>
</svg>
