from flask import Blueprint, render_template

dashboard_bp = Blueprint('dashboard', __name__)

@dashboard_bp.route('/')
def dashboard():
    return render_template('dashboard.html')

@dashboard_bp.route('/sales_overview')
def sales_overview():
    return render_template('sales_overview_partial.html')

@dashboard_bp.route('/toolbox')
def toolbox():
    return render_template('toolbox_partial.html')


