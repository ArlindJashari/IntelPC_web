export function PushNotifications({ notifications, onDismiss }) {
  return (
    <div className="push-stack" aria-live="polite" aria-atomic="false">
      {notifications.map((notification) => (
        <article key={notification.id} className={`push-toast push-${notification.tone || 'info'}`} role="status">
          <div className="push-toast-copy">
            <strong>{notification.title}</strong>
            <p>{notification.message}</p>
          </div>
          <button
            type="button"
            className="push-toast-close"
            aria-label="Dismiss notification"
            onClick={() => onDismiss(notification.id)}
          >
            ×
          </button>
        </article>
      ))}
    </div>
  );
}
