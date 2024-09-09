from flask import Flask

def create_app():
    app = Flask(__name__)
    app.secret_key = 'your_secret_key'  # 用于加密会话数据

    from .views.website import website_bp
    from .views.admin import admin_bp
    from .views.dashboard import dashboard_bp
    from .views.data_modules import project_analysis_bp, daily_report_bp, monthly_report_bp, project_initial_plan_bp

    app.register_blueprint(website_bp)
    app.register_blueprint(admin_bp, url_prefix='/admin')
    app.register_blueprint(dashboard_bp, url_prefix='/dashboard')
    app.register_blueprint(project_analysis_bp, url_prefix='/data/project-analysis')
    app.register_blueprint(daily_report_bp, url_prefix='/data/daily-report')
    app.register_blueprint(monthly_report_bp, url_prefix='/data/monthly-report')
    app.register_blueprint(project_initial_plan_bp, url_prefix='/data/project-initial-plan')

    return app
