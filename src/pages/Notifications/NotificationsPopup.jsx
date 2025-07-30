import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const NotificationsPopup = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [notifications, setNotifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const popupRef = useRef(null);

  const fetchNotifications = async () => {
    if (!user?.email) return;
    try {
      setLoading(true);
      const res = await axiosSecure.get(
        `/notifications?email=${user.email.toLowerCase()}`
      );
      setNotifications(res.data || []);
    } catch (error) {
      console.error("Failed to fetch notifications", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, [user?.email]);

  // Refetch when popup is opened
  useEffect(() => {
    if (showPopup) fetchNotifications();
  }, [showPopup]);

  // Close popup on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };
    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showPopup]);

  return (
    <div className="relative">
      <button
        className="btn btn-ghost btn-circle tooltip"
        data-tip="Notifications"
        onClick={() => setShowPopup(!showPopup)}
      >
        <FaBell className="w-5 h-5" />
        {notifications.length > 0 && (
          <span className="badge badge-sm badge-primary absolute top-0 right-0">
            {notifications.length}
          </span>
        )}
      </button>

      {showPopup && (
        <div
          ref={popupRef}
          className="absolute right-0 mt-2 w-80 max-h-96 overflow-y-auto bg-white border border-gray-300 rounded shadow-lg z-50"
        >
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <span className="font-semibold">Notifications</span>
            <button
              className="text-xs text-blue-500 hover:underline"
              onClick={fetchNotifications}
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="p-4 text-center text-gray-500">Loading...</p>
          ) : notifications.length === 0 ? (
            <p className="p-4 text-center text-gray-500">No notifications</p>
          ) : (
            notifications.map((n) => (
              <div
                key={n._id}
                className="p-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100"
                onClick={() => {
                  setShowPopup(false);
                  if (n.actionRoute) window.location.href = n.actionRoute;
                }}
              >
                <p className="text-sm">{n.message}</p>
                <small className="text-xs text-gray-400">
                  {new Date(n.time).toLocaleString()}
                </small>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default NotificationsPopup;
