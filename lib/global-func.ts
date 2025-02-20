export function maskIP(ip: string) {
  const parts = ip.split("."); // Pisahkan berdasarkan titik
  if (parts.length === 4) {
    return `${parts[0]}.${parts[1]}.xxx.xxx`;
  }
  return ip; // Jika bukan format IPv4, kembalikan apa adanya
}
