
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Car Rent. All Rights Reserved.
        </p>
        <p className="footer-text">
          Designed and developed with 💙 by Xpert Studio.
        </p>
      </div>
    </footer>
  );
}
