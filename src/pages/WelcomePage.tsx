import React, { useState } from 'react';
import { User, Phone, Mail, Calendar, FileText, AlertCircle, Star } from 'lucide-react';
import { UserProfile, Appointment, Physiotherapist } from '../types';
import { physiotherapists } from '../data/physiotherapists';

interface WelcomePageProps {
  onComplete: (profile: UserProfile) => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    age: '',
    phone: '',
    email: '',
    injuryType: '',
    injuryDescription: '',
    painLevel: 5,
    previousTreatment: ''
  });
  const [selectedPhysio, setSelectedPhysio] = useState<Physiotherapist | null>(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [showAppointment, setShowAppointment] = useState(false);

  const injuryTypes = [
    'Joelho', 'Ombro', 'Tornozelo', 'Coluna', 'Punho', 'Quadril', 'Pescoço', 'Outro'
  ];

  const handleInputChange = (field: keyof UserProfile, value: string | number) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  const handleNextStep = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleScheduleAppointment = () => {
    if (selectedPhysio && selectedDate && selectedTime) {
      // Aqui você salvaria o agendamento
      alert(`Consulta agendada com ${selectedPhysio.name} para ${selectedDate} às ${selectedTime}`);
      onComplete(profile);
    }
  };

  const handleSkipAppointment = () => {
    onComplete(profile);
  };

  const isStep1Valid = profile.name && profile.age && profile.phone && profile.email;
  const isStep2Valid = profile.injuryType && profile.injuryDescription;

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo ao REABSPRO</h1>
            <p className="text-gray-600">Vamos conhecer você melhor para personalizar sua experiência</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-600">Progresso</span>
              <span className="text-sm text-gray-600">{step}/3</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <User className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                  <h2 className="text-2xl font-semibold text-gray-800">Informações Pessoais</h2>
                  <p className="text-gray-600">Conte-nos um pouco sobre você</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                    <input
                      type="text"
                      value={profile.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Idade</label>
                    <input
                      type="number"
                      value={profile.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Sua idade"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        value={profile.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mail</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        value={profile.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleNextStep}
                    disabled={!isStep1Valid}
                    className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Injury Information */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <AlertCircle className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                  <h2 className="text-2xl font-semibold text-gray-800">Sobre sua Lesão</h2>
                  <p className="text-gray-600">Nos ajude a entender melhor sua condição</p>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de Lesão</label>
                  <select
                    value={profile.injuryType}
                    onChange={(e) => handleInputChange('injuryType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Selecione o tipo de lesão</option>
                    {injuryTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Descrição da Lesão</label>
                  <textarea
                    value={profile.injuryDescription}
                    onChange={(e) => handleInputChange('injuryDescription', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Descreva como aconteceu a lesão, quando começou a dor, sintomas, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nível de Dor (1-10): {profile.painLevel}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={profile.painLevel}
                    onChange={(e) => handleInputChange('painLevel', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Sem dor</span>
                    <span>Dor insuportável</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tratamento Anterior</label>
                  <textarea
                    value={profile.previousTreatment}
                    onChange={(e) => handleInputChange('previousTreatment', e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Já fez fisioterapia? Tomou medicamentos? Fez cirurgia? (Opcional)"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handlePrevStep}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Anterior
                  </button>
                  <button
                    onClick={handleNextStep}
                    disabled={!isStep2Valid}
                    className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                  >
                    Próximo
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Appointment Scheduling */}
            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <Calendar className="h-12 w-12 text-teal-600 mx-auto mb-2" />
                  <h2 className="text-2xl font-semibold text-gray-800">Agendar Consulta</h2>
                  <p className="text-gray-600">Escolha um fisioterapeuta para sua primeira consulta (opcional)</p>
                </div>

                {!showAppointment ? (
                  <div className="text-center space-y-4">
                    <p className="text-gray-600">Gostaria de agendar uma consulta com um fisioterapeuta?</p>
                    <div className="flex justify-center space-x-4">
                      <button
                        onClick={() => setShowAppointment(true)}
                        className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors"
                      >
                        Sim, agendar consulta
                      </button>
                      <button
                        onClick={handleSkipAppointment}
                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                      >
                        Pular por agora
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-4">Escolha um Fisioterapeuta</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {physiotherapists.map(physio => (
                          <div
                            key={physio.id}
                            onClick={() => setSelectedPhysio(physio)}
                            className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                              selectedPhysio?.id === physio.id
                                ? 'border-teal-500 bg-teal-50'
                                : 'border-gray-200 hover:border-teal-300'
                            }`}
                          >
                            <h4 className="font-semibold text-gray-800">{physio.name}</h4>
                            <p className="text-sm text-gray-600">{physio.specialty}</p>
                            <p className="text-sm text-gray-500">{physio.experience}</p>
                            <div className="flex items-center mt-2">
                              <Star className="h-4 w-4 text-yellow-400 fill-current" />
                              <span className="text-sm text-gray-600 ml-1">{physio.rating}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {selectedPhysio && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Data</label>
                          <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">Horário</label>
                          <select
                            value={selectedTime}
                            onChange={(e) => setSelectedTime(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
                          >
                            <option value="">Selecione um horário</option>
                            {selectedPhysio.availableTimes.map(time => (
                              <option key={time} value={time}>{time}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-between">
                      <button
                        onClick={() => setShowAppointment(false)}
                        className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                      >
                        Voltar
                      </button>
                      <div className="space-x-2">
                        <button
                          onClick={handleSkipAppointment}
                          className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                        >
                          Pular
                        </button>
                        <button
                          onClick={handleScheduleAppointment}
                          disabled={!selectedPhysio || !selectedDate || !selectedTime}
                          className="px-6 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                        >
                          Agendar Consulta
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;