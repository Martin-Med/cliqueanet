import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Loader2, 
  CheckCircle2, 
  XCircle,
  CarFront,
  Palette,
  Clock,
  DollarSign,
  Barcode,
  ShieldCheck,
  UserCircle2
} from 'lucide-react';
import { Alert, AlertDescription } from '../components/ui/alert';

export const Inventario = () => {
  const [formData, setFormData] = useState({
    marca: '',
    tipo: '',
    año: '',
    precio: '',
    serie: '',
    color: '',
    motor: '',
    id_cliente: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [touched, setTouched] = useState({
    marca: false,
    tipo: false,
    año: false,
    precio: false,
    serie: false,
    color: false,
    motor: false,
    id_cliente: false
  });

  const [validation, setValidation] = useState({
    marca: false,
    tipo: false,
    año: false,
    precio: false,
    serie: false,
    color: false,
    motor: false,
    id_cliente: false
  });

  // Previous code remains the same...

  {/* Serie */}
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <Barcode className={`h-5 w-5 transition-all duration-300 ${
        getInputStatus('serie') === 'valid' ? 'text-green-500 scale-110' :
        getInputStatus('serie') === 'invalid' ? 'text-red-500 scale-110' :
        'text-gray-400'
      }`} />
    </div>
    <input
      type="text"
      name="serie"
      value={formData.serie}
      onChange={handleChange}
      onBlur={() => setTouched(prev => ({ ...prev, serie: true }))}
      className={`block w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border 
        ${getInputStatus('serie') === 'valid' ? 'border-green-200 focus:ring-green-500' :
          getInputStatus('serie') === 'invalid' ? 'border-red-200 focus:ring-red-500' :
          'border-gray-200 focus:ring-blue-500'
        } 
        placeholder:text-gray-400 focus:ring-2 focus:border-transparent focus:outline-none 
        transition-all bg-white/90 backdrop-blur-sm hover:bg-white`}
      placeholder="Serie"
      required
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      {touched.serie && (
        validation.serie ? 
          <CheckCircle2 className="h-5 w-5 text-green-500 animate-in fade-in" /> :
          <XCircle className="h-5 w-5 text-red-500 animate-in fade-in" />
      )}
    </div>
  </div>

  {/* Color */}
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <Palette className={`h-5 w-5 transition-all duration-300 ${
        getInputStatus('color') === 'valid' ? 'text-green-500 scale-110' :
        getInputStatus('color') === 'invalid' ? 'text-red-500 scale-110' :
        'text-gray-400'
      }`} />
    </div>
    <input
      type="text"
      name="color"
      value={formData.color}
      onChange={handleChange}
      onBlur={() => setTouched(prev => ({ ...prev, color: true }))}
      className={`block w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border 
        ${getInputStatus('color') === 'valid' ? 'border-green-200 focus:ring-green-500' :
          getInputStatus('color') === 'invalid' ? 'border-red-200 focus:ring-red-500' :
          'border-gray-200 focus:ring-blue-500'
        } 
        placeholder:text-gray-400 focus:ring-2 focus:border-transparent focus:outline-none 
        transition-all bg-white/90 backdrop-blur-sm hover:bg-white`}
      placeholder="Color"
      required
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      {touched.color && (
        validation.color ? 
          <CheckCircle2 className="h-5 w-5 text-green-500 animate-in fade-in" /> :
          <XCircle className="h-5 w-5 text-red-500 animate-in fade-in" />
      )}
    </div>
  </div>

  {/* Motor */}
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <ShieldCheck className={`h-5 w-5 transition-all duration-300 ${
        getInputStatus('motor') === 'valid' ? 'text-green-500 scale-110' :
        getInputStatus('motor') === 'invalid' ? 'text-red-500 scale-110' :
        'text-gray-400'
      }`} />
    </div>
    <input
      type="text"
      name="motor"
      value={formData.motor}
      onChange={handleChange}
      onBlur={() => setTouched(prev => ({ ...prev, motor: true }))}
      className={`block w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border 
        ${getInputStatus('motor') === 'valid' ? 'border-green-200 focus:ring-green-500' :
          getInputStatus('motor') === 'invalid' ? 'border-red-200 focus:ring-red-500' :
          'border-gray-200 focus:ring-blue-500'
        } 
        placeholder:text-gray-400 focus:ring-2 focus:border-transparent focus:outline-none 
        transition-all bg-white/90 backdrop-blur-sm hover:bg-white`}
      placeholder="Motor"
      required
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      {touched.motor && (
        validation.motor ? 
          <CheckCircle2 className="h-5 w-5 text-green-500 animate-in fade-in" /> :
          <XCircle className="h-5 w-5 text-red-500 animate-in fade-in" />
      )}
    </div>
  </div>

  {/* ID Cliente */}
  <div className="relative group">
    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
      <UserCircle2 className={`h-5 w-5 transition-all duration-300 ${
        getInputStatus('id_cliente') === 'valid' ? 'text-green-500 scale-110' :
        getInputStatus('id_cliente') === 'invalid' ? 'text-red-500 scale-110' :
        'text-gray-400'
      }`} />
    </div>
    <input
      type="text"
      name="id_cliente"
      value={formData.id_cliente}
      onChange={handleChange}
      onBlur={() => setTouched(prev => ({ ...prev, id_cliente: true }))}
      className={`block w-full pl-12 pr-4 py-3 text-gray-900 rounded-xl border 
        ${getInputStatus('id_cliente') === 'valid' ? 'border-green-200 focus:ring-green-500' :
          getInputStatus('id_cliente') === 'invalid' ? 'border-red-200 focus:ring-red-500' :
          'border-gray-200 focus:ring-blue-500'
        } 
        placeholder:text-gray-400 focus:ring-2 focus:border-transparent focus:outline-none 
        transition-all bg-white/90 backdrop-blur-sm hover:bg-white`}
      placeholder="ID Cliente"
      required
    />
    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
      {touched.id_cliente && (
        validation.id_cliente ? 
          <CheckCircle2 className="h-5 w-5 text-green-500 animate-in fade-in" /> :
          <XCircle className="h-5 w-5 text-red-500 animate-in fade-in" />
      )}
    </div>
  </div>
</form>

{/* Submit Button */}
<div className="col-span-full flex items-center justify-center mt-6">
  <button 
    type="submit" 
    disabled={loading || !Object.values(validation).every(v => v === true)}
    className={`
      w-full max-w-md py-3 rounded-xl transition-all duration-300 
      flex items-center justify-center space-x-2
      ${loading || !Object.values(validation).every(v => v === true) 
        ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
        : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800'
      }
    `}
  >
    {loading ? (
      <>
        <Loader2 className="h-5 w-5 animate-spin" />
        <span>Guardando...</span>
      </>
    ) : (
      <>
        <span>Registrar Vehículo</span>
        <ChevronRight className="h-5 w-5" />
      </>
    )}
  </button>
</div>
</div>
</div>
</div>
  );
};

export default Inventario;