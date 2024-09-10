from flask import Blueprint, render_template

project_analysis_bp = Blueprint('project_analysis', __name__)
daily_report_bp = Blueprint('daily_report', __name__)
monthly_report_bp = Blueprint('monthly_report', __name__)
project_initial_plan_bp = Blueprint('project_initial_plan', __name__)

@project_analysis_bp.route('/')
def project_analysis():
    return render_template('project_analysis.html')

@daily_report_bp.route('/')
def daily_report():
    return render_template('daily_report.html')

@monthly_report_bp.route('/')
def monthly_report():
    return render_template('monthly_report.html')

@project_initial_plan_bp.route('/')
def project_initial_plan():
    return render_template('project_initial_plan.html')
